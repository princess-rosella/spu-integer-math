
export type u8 = number;

export class UInt8 {
    public static add(a: u8, b: u8): u8 {
        return ((a & 0xff) + (b & 0xff)) & 0xff;
    }

    public static sub(a: u8, b: u8): u8 {
        return ((a & 0xff) - (b & 0xff)) & 0xff;
    }

    public static mul(a: u8, b: u8): u8 {
        return ((a & 0xff) * (b & 0xff)) & 0xff;
    }

    public static div(a: u8, b: u8): u8 {
        return ((a & 0xff) / (b & 0xff)) & 0xff;
    }

    public static mod(a: u8, b: u8): u8 {
        return ((a & 0xff) % (b & 0xff)) & 0xff;
    }

    public static fromNumber(v: number): u8 {
        return v & 0xff;
    }

    public static clamp(value: u8, min: u8, max: u8) {
        value &= 0xff;
        min &= 0xff;
        max &= 0xff;
        return value < min ? min : (value > max ? max : value);
    }

    public static toHex(value: u8): string {
        value &= 0xff;

        if (value <= 0xf)
            return "0x0" + value.toString(16);
        else
            return "0x" + value.toString(16);
    }

    public static readonly min = 0x00;
    public static readonly max = 0xff;
    public static readonly bitWidth = 8;
    public static readonly isSigned = false;
}
