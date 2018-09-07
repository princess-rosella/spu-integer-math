
export type i8 = number;

const fromNumber = function(v: number): i8 {
    return v << 24 >> 24;
}

export class Int8 {
    public static add(a: i8, b: i8): i8 {
        return fromNumber(fromNumber(a) + fromNumber(b));
    }

    public static sub(a: i8, b: i8): i8 {
        return fromNumber(fromNumber(a) - fromNumber(b));
    }

    public static mul(a: i8, b: i8): i8 {
        return fromNumber(fromNumber(a) * fromNumber(b));
    }

    public static div(a: i8, b: i8): i8 {
        return fromNumber(fromNumber(a) / fromNumber(b));
    }

    public static mod(a: i8, b: i8): i8 {
        return fromNumber(a) % fromNumber(b);
    }

    public static fromNumber(v: number): i8 {
        return v << 24 >> 24;
    }

    public static clamp(value: i8, min: i8, max: i8): i8 {
        value = fromNumber(value);
        min = fromNumber(min);
        max = fromNumber(max);
        return value < min ? min : (value > max ? max : value);
    }

    public static readonly min: i8 = -128;
    public static readonly max: i8 = 127;
    public static readonly bitWidth = 8;
    public static readonly isSigned = true;
}
