# JavaScript Integer Math

This project implements, in pure JavaScript, a way to perform integer maths with datatypes not natively available in that language.

## Typescript Example

```typescript

import { UInt8 } from "js-integer-math";

UInt8.add(255, 1) === 0
UInt16.add(65535, 1) === 0

```

## Classes

### Int8

```typescript
export declare class Int8 {
    static add(a: i8, b: i8): i8;
    static sub(a: i8, b: i8): i8;
    static mul(a: i8, b: i8): i8;
    static div(a: i8, b: i8): i8;
    static mod(a: i8, b: i8): i8;
    static fromNumber(v: number): i8;
    static clamp(value: i8, min: i8, max: i8): i8;
    static readonly min: i8;
    static readonly max: i8;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```

### Int16

```typescript
export declare class Int16 {
    static add(a: i16, b: i16): i16;
    static sub(a: i16, b: i16): i16;
    static mul(a: i16, b: i16): i16;
    static div(a: i16, b: i16): i16;
    static mod(a: i16, b: i16): i16;
    static fromNumber(v: number): i16;
    static clamp(value: i16, min: i16, max: i16): i16;
    static readonly min: i16;
    static readonly max: i16;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```

### Int32

```typescript
export declare class Int32 {
    static add(a: i32, b: i32): i32;
    static sub(a: i32, b: i32): i32;
    static mul(a: i32, b: i32): i32;
    static div(a: i32, b: i32): i32;
    static mod(a: i32, b: i32): i32;
    static fromNumber(v: number): i32;
    static clamp(value: i32, min: i32, max: i32): i32;
    static readonly min: i32;
    static readonly max: i32;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```

### UInt8

```typescript
export declare class UInt8 {
    static add(a: u8, b: u8): u8;
    static sub(a: u8, b: u8): u8;
    static mul(a: u8, b: u8): u8;
    static div(a: u8, b: u8): u8;
    static mod(a: u8, b: u8): u8;
    static fromNumber(v: number): u8;
    static clamp(value: u8, min: u8, max: u8): u8;
    static toHex(value: u8): string;
    static readonly min: u8;
    static readonly max: u8;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```

### UInt16

```typescript
export declare class UInt16 {
    static add(a: u16, b: u16): u16;
    static sub(a: u16, b: u16): u16;
    static mul(a: u16, b: u16): u16;
    static div(a: u16, b: u16): u16;
    static mod(a: u16, b: u16): u16;
    static fromNumber(v: number): u16;
    static clamp(value: u16, min: u16, max: u16): u16;
    static toHex(value: u16): string;
    static readonly min: u16;
    static readonly max: u16;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```

### UInt32

```typescript
export declare class UInt32 {
    static add(a: u32, b: u32): u32;
    static sub(a: u32, b: u32): u32;
    static mul(a: u32, b: u32): u32;
    static div(a: u32, b: u32): u32;
    static mod(a: u32, b: u32): u32;
    static fromNumber(v: number): u32;
    static clamp(value: u32, min: u32, max: u32): u32;
    static toHex(value: u32): string;
    static readonly min: u32;
    static readonly max: u32;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```

### UInt64

```typescript
export declare class UInt64 {
    readonly hi: number;
    readonly lo: number;
    constructor(lo: number | UInt64, hi?: number);
    readonly isZero: boolean;
    readonly isNonZero: boolean;
    readonly isSafeInteger: boolean;
    static add(a: number | UInt64, b: number | UInt64): UInt64;
    static sub(a: number | UInt64, b: number | UInt64): UInt64;
    static neg(b: number | UInt64): UInt64;
    static and(a: number | UInt64, b: number | UInt64): UInt64;
    static or(a: number | UInt64, b: number | UInt64): UInt64;
    static xor(a: number | UInt64, b: number | UInt64): UInt64;
    static not(a: number | UInt64): UInt64;
    static shiftLeft(value: number | UInt64, shift: number): UInt64;
    static shiftRight(value: number | UInt64, shift: number): UInt64;
    static fromNumber(value: number | UInt64): UInt64;
    static fromString(value: string, base?: number): UInt64;
    static compare(a: number | UInt64, b: number | UInt64): number;
    toHex(): string;
    toString(): string;
    toDebugString(): string;
    static toHex(a: number | UInt64): string;
    static readonly min: UInt64;
    static readonly max: UInt64;
    static readonly bitWidth: number;
    static readonly isSigned: boolean;
}
```