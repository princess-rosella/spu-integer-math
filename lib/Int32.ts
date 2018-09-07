
export type i32 = number;

const imul = Math.imul;

export class Int32 {
    public static add(a: i32, b: i32): i32 {
        return ((a | 0) + (b | 0)) | 0;
    }

    public static sub(a: i32, b: i32): i32 {
        return ((a | 0) - (b | 0)) | 0;
    }

    public static mul(a: i32, b: i32): i32 {
        return imul((a | 0), (b | 0)) | 0;
    }

    public static div(a: i32, b: i32): i32 {
        return ((a | 0) / (b | 0)) | 0;
    }

    public static mod(a: i32, b: i32): i32 {
        return ((a | 0) % (b | 0));
    }

    public static fromNumber(v: number): i32 {
        return v | 0;
    }

    public static clamp(value: i32, min: i32, max: i32): i32 {
        value |= 0;
        min |= 0;
        max |= 0;
        return value < min ? min : (value > max ? max : value);
    }

    public static readonly min: i32 = -2147483648;
    public static readonly max: i32 = 2147483647;
    public static readonly bitWidth = 32;
    public static readonly isSigned = true;
}
