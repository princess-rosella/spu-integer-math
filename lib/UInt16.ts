
export type u16 = number;

export class UInt16 {
    public static add(a: u16, b: u16): u16 {
        return ((a & 0xffff) + (b & 0xffff)) & 0xffff;
    }

    public static sub(a: u16, b: u16): u16 {
        return ((a & 0xffff) - (b & 0xffff)) & 0xffff;
    }

    public static mul(a: u16, b: u16): u16 {
        return ((a & 0xffff) * (b & 0xffff)) & 0xffff;
    }

    public static div(a: u16, b: u16): u16 {
        return ((a & 0xffff) / (b & 0xffff)) & 0xffff;
    }

    public static mod(a: u16, b: u16): u16 {
        return ((a & 0xffff) % (b & 0xffff)) & 0xffff;
    }

    public static fromNumber(v: number): u16 {
        return v & 0xffff;
    }

    public static clamp(value: u16, min: u16, max: u16): u16 {
        value &= 0xffff;
        min &= 0xffff;
        max &= 0xffff;
        return value < min ? min : (value > max ? max : value);
    }

    public static toHex(value: u16): string {
        value &= 0xffff;

        if (value <= 0xf)
            return "0x000" + value.toString(16);
        else if (value <= 0xff)
            return "0x00" + value.toString(16);
        else if (value <= 0xfff)
            return "0x0" + value.toString(16);
        else
            return "0x" + value.toString(16);
    }

    public static readonly min: u16 = 0x0000;
    public static readonly max: u16 = 0xffff;
    public static readonly bitWidth = 16;
    public static readonly isSigned = false;
}
