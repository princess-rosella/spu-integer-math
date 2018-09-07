
const firstHighBit = 0x100000000;

const toHex = function(value: number) {
    value >>>= 0;

    if (value <= 0xf)
        return "0000000" + value.toString(16);
    else if (value <= 0xff)
        return "000000" + value.toString(16);
    else if (value <= 0xfff)
        return "00000" + value.toString(16);
    else if (value <= 0xffff)
        return "0000" + value.toString(16);
    else if (value <= 0xfffff)
        return "000" + value.toString(16);
    else if (value <= 0xffffff)
        return "00" + value.toString(16);
    else if (value <= 0xfffffff)
        return "0" + value.toString(16);
    else
        return value.toString(16);
}

export class UInt64 {
    readonly hi: number;
    readonly lo: number;

    public constructor(lo: number | UInt64, hi?: number) {
        if (!lo && !hi) {
            this.hi = 0;
            this.lo = 0;
        }
        else if (typeof lo === "number") {
            if (typeof hi === "number") {
                this.hi = hi | 0;
                this.lo = lo | 0;    
            }
            else if (lo < 0) {
                this.hi = -1;
                this.lo = lo | 0;
            }
            else if (lo <= 0xffffffff) {
                this.hi = 0;
                this.lo = lo | 0;
            }
            else {
                this.hi = (lo / firstHighBit) | 0;
                this.lo = lo | 0;
            }
        }
        else {
            this.hi = lo.hi | 0;
            this.lo = lo.lo | 0;
        }

        Object.freeze(this);
    }

    public get isZero(): boolean {
        return this.lo === 0 && this.hi === 0;
    }

    public get isNonZero(): boolean {
        return this.lo !== 0 || this.hi !== 0;
    }

    public get isSafeInteger(): boolean {
        return Number.isSafeInteger(+this);
    }

    public static add(a: number | UInt64, b: number | UInt64): UInt64 {
        a = UInt64.fromNumber(a);
        b = UInt64.fromNumber(b);

        const carry = +((a.lo < 0 && (b.lo < 0 || b.lo > ~a.lo)) || (b.lo < 0 && b.lo > ~a.lo));
        return new UInt64((a.lo + b.lo) | 0, (a.hi + b.hi + carry) | 0);
    }

    public static sub(a: number | UInt64, b: number | UInt64): UInt64 {
        a = UInt64.fromNumber(a);
        if (b === 0)
            return a;

        b = UInt64.fromNumber(b);
        if (b.lo === 0 && b.hi === 0)
            return a;

        if (a.lo === b.lo && a.hi === b.hi)
            return UInt64.min;

        const alo   = a.lo >>> 0;
        const blo   = b.lo >>> 0;
        const carry = (alo < blo)? 1: 0;
        return new UInt64((alo - blo) | 0, ((a.hi >>> 0) - (b.hi >>> 0) - carry) | 0);
    }

    public static neg(b: number | UInt64): UInt64 {
        if (b === 0)
            return UInt64.min;

        b = UInt64.fromNumber(b);
        if (b.lo === 0 && b.hi === 0)
            return UInt64.min;

        return new UInt64(-b.lo, -b.hi - 1);
    }

    public static and(a: number | UInt64, b: number | UInt64): UInt64 {
        a = UInt64.fromNumber(a);
        b = UInt64.fromNumber(b);
        return new UInt64(a.lo & b.lo, a.hi & b.hi);
    }

    public static or(a: number | UInt64, b: number | UInt64): UInt64 {
        a = UInt64.fromNumber(a);
        b = UInt64.fromNumber(b);
        return new UInt64(a.lo | b.lo, a.hi | b.hi);
    }

    public static xor(a: number | UInt64, b: number | UInt64): UInt64 {
        a = UInt64.fromNumber(a);
        b = UInt64.fromNumber(b);
        return new UInt64(a.lo ^ b.lo, a.hi ^ b.hi);
    }

    public static not(a: number | UInt64): UInt64 {
        a = UInt64.fromNumber(a);
        return new UInt64(~a.lo, ~a.hi);
    }

    public static shiftLeft(value: number | UInt64, shift: number): UInt64 {
        value = UInt64.fromNumber(value);

        if (shift === 0)
            return value;
        else if (shift < 32)
            return new UInt64(value.lo << shift, (value.hi << shift) | (value.lo >>> (32 - shift)));
        else if (shift < 64)
            return new UInt64(0, value.lo << (shift - 32));

        return value;
    }

    public static shiftRight(value: number | UInt64, shift: number): UInt64 {
        value = UInt64.fromNumber(value);

        if (shift === 0)
            return value;
        else if (shift < 32)
            return new UInt64((value.hi << (32 - shift)) | (value.lo >>> shift), value.hi >>> shift);
        else if (shift < 64)
            return new UInt64(value.hi >>> (shift - 32), 0);

        return value;
    }

    public static fromNumber(value: number | UInt64): UInt64 {
        if (value instanceof UInt64)
            return value;

        return new UInt64(value);
    }

    public static fromString(value: string, base?: number): UInt64 {
        if (!base && value.startsWith("0x"))
            base = 16;

        if (base === 16 && value.startsWith("0x"))
            value = value.substr(2);

        const length = value.length;
        if (base === 16) {
            if (length <= 8)
                return new UInt64(parseInt(value, 16), 0);

            const hi = parseInt(value.substr(0, length - 8), 16);
            const lo = parseInt(value.substr(length - 8), 16);
            return new UInt64(lo, hi);
        }

        return new UInt64(parseInt(value, base));
    }

    public static compare(a: number | UInt64, b: number | UInt64): number {
        a = UInt64.fromNumber(a);
        b = UInt64.fromNumber(b);

        const a0 = a.hi >>> 0;
        const a1 = a.lo >>> 0;
        const b0 = b.hi >>> 0;
        const b1 = b.lo >>> 0;

        return a0 < b0 ? -1 : a0 > b0 ? 1 :
               a1 < b1 ? -1 : a1 > b1 ? 1 : 0 ;
    }

    public toHex(): string {
        return `0x${toHex(this.hi)}${toHex(this.lo)}`;
    }

    public toString(): string {
        return this.toHex();
    }

    public toDebugString(): string {
        return `${toHex(this.hi)} ${toHex(this.lo)}`;
    }

    public static toHex(a: number | UInt64): string {
        return UInt64.fromNumber(a).toHex();
    }

    public static readonly min = new UInt64(0, 0);
    public static readonly max = new UInt64(-1, -1);

    public static readonly bitWidth = 64;
    public static readonly isSigned = false;

    [Symbol.toPrimitive](hint: string) {
        if (hint === "number" || hint === "default") {
            if (!this.hi)
                return (this.lo >>> 0);
            
            const hi = this.hi * firstHighBit;
            return hi + (this.lo >>> 0);
        }
        else if (hint === "string")
            return this.toHex();
        else if (hint === "boolean")
            return this.hi || this.lo;

        return null;
    }
};

Object.freeze(UInt64.min);
Object.freeze(UInt64.max);
