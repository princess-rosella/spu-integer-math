
export type i16 = number;

const fromNumber = function(v: number): i16 {
    return v << 16 >> 16;
}

export class Int16 {
    public static add(a: i16, b: i16): i16 {
        return fromNumber(fromNumber(a) + fromNumber(b));
    }

    public static sub(a: i16, b: i16): i16 {
        return fromNumber(fromNumber(a) - fromNumber(b));
    }

    public static mul(a: i16, b: i16): i16 {
        return fromNumber(fromNumber(a) * fromNumber(b));
    }

    public static div(a: i16, b: i16): i16 {
        return fromNumber(fromNumber(a) / fromNumber(b));
    }

    public static mod(a: i16, b: i16): i16 {
        return fromNumber(a) % fromNumber(b);
    }

    public static fromNumber(v: number): i16 {
        return v << 16 >> 16;
    }

    public static clamp(value: i16, min: i16, max: i16) {
        value = fromNumber(value);
        min = fromNumber(min);
        max = fromNumber(max);
        return value < min ? min : (value > max ? max : value);
    }

    public static readonly min = -32768;
    public static readonly max = 32767;
    public static readonly bitWidth = 16;
    public static readonly isSigned = true;
}
