
export type u32 = number;

const imul = Math.imul;

export class UInt32 {
    public static add(a: u32, b: u32): u32 {
        return ((a >>> 0) + (b >>> 0)) >>> 0;
    }

    public static sub(a: u32, b: u32): u32 {
        return ((a >>> 0) - (b >>> 0)) >>> 0;
    }

    public static mul(a: u32, b: u32): u32 {
        return imul((a >>> 0), (b >>> 0)) >>> 0;
    }

    public static div(a: u32, b: u32): u32 {
        return ((a >>> 0) / (b >>> 0)) >>> 0;
    }

    public static mod(a: u32, b: u32): u32 {
        return ((a >>> 0) % (b >>> 0));
    }

    public static fromNumber(v: number): u32 {
        return v >>> 0;
    }

    public static clamp(value: u32, min: u32, max: u32): u32 {
        value >>>= 0;
        min >>>= 0;
        max >>>= 0;
        return value < min ? min : (value > max ? max : value);
    }

    public static toHex(value: u32): string {
        value >>>= 0;

        if (value <= 0xf)
            return "0x0000000" + value.toString(16);
        else if (value <= 0xff)
            return "0x000000" + value.toString(16);
        else if (value <= 0xfff)
            return "0x00000" + value.toString(16);
        else if (value <= 0xffff)
            return "0x0000" + value.toString(16);
        else if (value <= 0xfffff)
            return "0x000" + value.toString(16);
        else if (value <= 0xffffff)
            return "0x00" + value.toString(16);
        else if (value <= 0xfffffff)
            return "0x0" + value.toString(16);
        else
            return "0x" + value.toString(16);
    }

    public static readonly min: u32 = 0x00000000;
    public static readonly max: u32 = 0xffffffff;
    public static readonly bitWidth = 32;
    public static readonly isSigned = false;
}
