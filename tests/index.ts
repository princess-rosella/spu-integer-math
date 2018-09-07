
import { Int8, UInt8, Int16, UInt16, Int32, UInt32, UInt64 } from "../lib/index";

function assertEquals(result: any, expected: any): void {
    if (result !== expected)
        throw new Error(`Assertion failed. Got ${result}, expected ${expected}`);
}

assertEquals(UInt8.add(0x00, 0x00), 0x00);
assertEquals(UInt8.add(0x01, 0x01), 0x02);
assertEquals(UInt8.add(0x02, 0x02), 0x04);
assertEquals(UInt8.add(0x03, 0x03), 0x06);
assertEquals(UInt8.add(0x04, 0x04), 0x08);
assertEquals(UInt8.add(0x01, 0xff), 0x00);
assertEquals(UInt8.add(0x02, 0xff), 0x01);
assertEquals(UInt8.add(0x03, 0xff), 0x02);
assertEquals(UInt8.add(0xff, 0xff), 0xfe);

assertEquals(UInt8.sub(0x00, 0x00), 0x00);
assertEquals(UInt8.sub(0x00, 0x01), 0xff);
assertEquals(UInt8.sub(0x00, 0x02), 0xfe);
assertEquals(UInt8.sub(0x01, 0xff), 0x02);
assertEquals(UInt8.sub(0x02, 0xff), 0x03);
assertEquals(UInt8.sub(0x03, 0xff), 0x04);
assertEquals(UInt8.sub(0xff, 0xff), 0x00);

assertEquals(UInt8.mul(0x00, 0x00), 0x00);
assertEquals(UInt8.mul(0x01, 0x01), 0x01);
assertEquals(UInt8.mul(0x02, 0x02), 0x04);
assertEquals(UInt8.mul(0x03, 0x03), 0x09);
assertEquals(UInt8.mul(0x04, 0x04), 0x10);
assertEquals(UInt8.mul(0x01, 0xff), 0xff);
assertEquals(UInt8.mul(0x02, 0xff), 0xfe);
assertEquals(UInt8.mul(0x03, 0xff), 0xfd);
assertEquals(UInt8.mul(0xff, 0xff), 0x01);

assertEquals(UInt8.div(0x00, 0x01), 0x00);
assertEquals(UInt8.div(0x00, 0x02), 0x00);
assertEquals(UInt8.div(0x01, 0xff), 0x00);
assertEquals(UInt8.div(0x02, 0x02), 0x01);
assertEquals(UInt8.div(0x03, 0x02), 0x01);
assertEquals(UInt8.div(0x04, 0x02), 0x02);

assertEquals(UInt8.mod(0x00, 0x01), 0x00);
assertEquals(UInt8.mod(0x00, 0x02), 0x00);
assertEquals(UInt8.mod(0x01, 0xff), 0x01);
assertEquals(UInt8.mod(0x03, 0x02), 0x01);
assertEquals(UInt8.mod(0x05, 0x02), 0x01);
assertEquals(UInt8.mod(0x04, 0x02), 0x00);

assertEquals(UInt8.toHex(0x0f), "0x0f");
assertEquals(UInt8.toHex(0xff), "0xff");

assertEquals(UInt16.add(0x00, 0x00), 0x0000);
assertEquals(UInt16.add(0x01, 0x01), 0x0002);
assertEquals(UInt16.add(0x02, 0x02), 0x0004);
assertEquals(UInt16.add(0x03, 0x03), 0x0006);
assertEquals(UInt16.add(0x04, 0x04), 0x0008);
assertEquals(UInt16.add(0x01, 0xff), 0x0100);
assertEquals(UInt16.add(0x02, 0xff), 0x0101);
assertEquals(UInt16.add(0x03, 0xff), 0x0102);
assertEquals(UInt16.add(0xff, 0xff), 0x01fe);

assertEquals(UInt16.sub(0x00, 0x00), 0x0000);
assertEquals(UInt16.sub(0x00, 0x01), 0xffff);
assertEquals(UInt16.sub(0x00, 0x02), 0xfffe);
assertEquals(UInt16.sub(0x01, 0xff), 0xff02);
assertEquals(UInt16.sub(0x02, 0xff), 0xff03);
assertEquals(UInt16.sub(0x03, 0xff), 0xff04);
assertEquals(UInt16.sub(0xff, 0xff), 0x0000);

assertEquals(UInt16.mul(0x00, 0x00), 0x0000);
assertEquals(UInt16.mul(0x01, 0x01), 0x0001);
assertEquals(UInt16.mul(0x02, 0x02), 0x0004);
assertEquals(UInt16.mul(0x03, 0x03), 0x0009);
assertEquals(UInt16.mul(0x04, 0x04), 0x0010);
assertEquals(UInt16.mul(0x01, 0xff), 0x00ff);
assertEquals(UInt16.mul(0x02, 0xff), 0x01fe);
assertEquals(UInt16.mul(0x03, 0xff), 0x02fd);
assertEquals(UInt16.mul(0xff, 0xff), 0xfe01);
assertEquals(UInt16.mul(0xff, 0xfff), 0xef01);
assertEquals(UInt16.mul(0xffff, 0xffff), 0x0001);

assertEquals(UInt16.div(0x00, 0x01), 0x0000);
assertEquals(UInt16.div(0x00, 0x02), 0x0000);
assertEquals(UInt16.div(0x01, 0xff), 0x0000);
assertEquals(UInt16.div(0x02, 0x02), 0x0001);
assertEquals(UInt16.div(0x03, 0x02), 0x0001);
assertEquals(UInt16.div(0x04, 0x02), 0x0002);

assertEquals(UInt16.mod(0x00, 0x01), 0x0000);
assertEquals(UInt16.mod(0x00, 0x02), 0x0000);
assertEquals(UInt16.mod(0x01, 0xff), 0x0001);
assertEquals(UInt16.mod(0x03, 0x02), 0x0001);
assertEquals(UInt16.mod(0x05, 0x02), 0x0001);
assertEquals(UInt16.mod(0x04, 0x02), 0x0000);

assertEquals(UInt16.toHex(0x000f), "0x000f");
assertEquals(UInt16.toHex(0x00f4), "0x00f4");
assertEquals(UInt16.toHex(0x0f40), "0x0f40");
assertEquals(UInt16.toHex(0xf400), "0xf400");

assertEquals(UInt32.fromNumber(-1), 0xffffffff);
assertEquals(UInt32.fromNumber(-2), 0xfffffffe);
assertEquals(UInt32.fromNumber(0xfffffffff), 0xffffffff);

assertEquals(UInt32.add(0x00, 0x00), 0x00000000);
assertEquals(UInt32.add(0x01, 0x01), 0x00000002);
assertEquals(UInt32.add(0x02, 0x02), 0x00000004);
assertEquals(UInt32.add(0x03, 0x03), 0x00000006);
assertEquals(UInt32.add(0x04, 0x04), 0x00000008);
assertEquals(UInt32.add(0x01, 0xff), 0x00000100);
assertEquals(UInt32.add(0x02, 0xff), 0x00000101);
assertEquals(UInt32.add(0x03, 0xff), 0x00000102);
assertEquals(UInt32.add(0xff, 0xff), 0x000001fe);
assertEquals(UInt32.add(0xffff, 0xffff), 0x0001fffe);
assertEquals(UInt32.add(0xffffffff, 0x01), 0x00000000);

assertEquals(UInt32.sub(0x00, 0x00), 0x00000000);
assertEquals(UInt32.sub(0x00, 0x01), 0xffffffff);
assertEquals(UInt32.sub(0x00, 0x02), 0xfffffffe);
assertEquals(UInt32.sub(0x01, 0xff), 0xffffff02);
assertEquals(UInt32.sub(0x02, 0xff), 0xffffff03);
assertEquals(UInt32.sub(0x03, 0xff), 0xffffff04);
assertEquals(UInt32.sub(0xff, 0xff), 0x00000000);

assertEquals(UInt32.mul(0x00, 0x00), 0x00000000);
assertEquals(UInt32.mul(0x01, 0x01), 0x00000001);
assertEquals(UInt32.mul(0x02, 0x02), 0x00000004);
assertEquals(UInt32.mul(0x03, 0x03), 0x00000009);
assertEquals(UInt32.mul(0x04, 0x04), 0x00000010);
assertEquals(UInt32.mul(0x01, 0xff), 0x000000ff);
assertEquals(UInt32.mul(0x02, 0xff), 0x000001fe);
assertEquals(UInt32.mul(0x03, 0xff), 0x000002fd);
assertEquals(UInt32.mul(0xff, 0xff), 0x0000fe01);
assertEquals(UInt32.mul(0xff, 0xfff), 0x000fef01);
assertEquals(UInt32.mul(0xffff, 0xffff), 0xfffe0001);

assertEquals(UInt32.div(0x00, 0x01), 0x00000000);
assertEquals(UInt32.div(0x00, 0x02), 0x00000000);
assertEquals(UInt32.div(0x01, 0xff), 0x00000000);
assertEquals(UInt32.div(0x02, 0x02), 0x00000001);
assertEquals(UInt32.div(0x03, 0x02), 0x00000001);
assertEquals(UInt32.div(0x04, 0x02), 0x00000002);

assertEquals(UInt32.mod(0x00, 0x01), 0x00000000);
assertEquals(UInt32.mod(0x00, 0x02), 0x00000000);
assertEquals(UInt32.mod(0x01, 0xff), 0x00000001);
assertEquals(UInt32.mod(0x03, 0x02), 0x00000001);
assertEquals(UInt32.mod(0x05, 0x02), 0x00000001);
assertEquals(UInt32.mod(0x04, 0x02), 0x00000000);

assertEquals(UInt32.toHex(0x0000000f), "0x0000000f");
assertEquals(UInt32.toHex(0x000000f4), "0x000000f4");
assertEquals(UInt32.toHex(0x00000f40), "0x00000f40");
assertEquals(UInt32.toHex(0x0000f400), "0x0000f400");
assertEquals(UInt32.toHex(0x000f4000), "0x000f4000");
assertEquals(UInt32.toHex(0x00f40000), "0x00f40000");
assertEquals(UInt32.toHex(0x0f400000), "0x0f400000");
assertEquals(UInt32.toHex(0xf4000000), "0xf4000000");

assertEquals(Int8.add(0, 0), 0);
assertEquals(Int8.add(1, 1), 2);
assertEquals(Int8.add(2, 2), 4);
assertEquals(Int8.add(3, 3), 6);
assertEquals(Int8.add(4, 4), 8);
assertEquals(Int8.add(1, 255), 0);
assertEquals(Int8.add(2, 255), 1);
assertEquals(Int8.add(3, 255), 2);
assertEquals(Int8.add(255, 255), -2);

assertEquals(Int8.sub(0, 0), 0);
assertEquals(Int8.sub(0, 1), -1);
assertEquals(Int8.sub(0, 2), -2);
assertEquals(Int8.sub(1, 255), 2);
assertEquals(Int8.sub(2, 255), 3);
assertEquals(Int8.sub(3, 255), 4);
assertEquals(Int8.sub(255, 255), 0);

assertEquals(Int8.mul(0, 0), 0);
assertEquals(Int8.mul(1, 1), 1);
assertEquals(Int8.mul(2, 2), 4);
assertEquals(Int8.mul(3, 3), 9);
assertEquals(Int8.mul(4, 4), 16);
assertEquals(Int8.mul(1, 255), -1);
assertEquals(Int8.mul(2, 255), -2);
assertEquals(Int8.mul(3, 255), -3);
assertEquals(Int8.mul(255, 255), 1);

assertEquals(Int8.div(0, 1), 0);
assertEquals(Int8.div(0, 2), 0);
assertEquals(Int8.div(1, 255), -1);
assertEquals(Int8.div(2, 2), 1);
assertEquals(Int8.div(3, 2), 1);
assertEquals(Int8.div(4, 2), 2);

assertEquals(Int8.mod(0, 1), 0);
assertEquals(Int8.mod(0, 2), 0);
assertEquals(Int8.mod(1, 255), 0);
assertEquals(Int8.mod(3, 2), 1);
assertEquals(Int8.mod(5, 2), 1);
assertEquals(Int8.mod(4, 2), 0);

assertEquals(Int16.add(0, 0), 0);
assertEquals(Int16.add(1, 1), 2);
assertEquals(Int16.add(2, 2), 4);
assertEquals(Int16.add(3, 3), 6);
assertEquals(Int16.add(4, 4), 8);
assertEquals(Int16.add(1, 255), 256);
assertEquals(Int16.add(2, 255), 257);
assertEquals(Int16.add(3, 255), 258);
assertEquals(Int16.add(255, 255), 510);

assertEquals(Int16.sub(0, 0), 0);
assertEquals(Int16.sub(0, 1), -1);
assertEquals(Int16.sub(0, 2), -2);
assertEquals(Int16.sub(1, 255), -254);
assertEquals(Int16.sub(2, 255), -253);
assertEquals(Int16.sub(3, 255), -252);
assertEquals(Int16.sub(255, 255), 0);

assertEquals(Int16.mul(0, 0), 0);
assertEquals(Int16.mul(1, 1), 1);
assertEquals(Int16.mul(2, 2), 4);
assertEquals(Int16.mul(3, 3), 9);
assertEquals(Int16.mul(4, 4), 16);
assertEquals(Int16.mul(1, 255), 255);
assertEquals(Int16.mul(2, 255), 510);
assertEquals(Int16.mul(3, 255), 765);
assertEquals(Int16.mul(255, 255), -511);
assertEquals(Int16.mul(255, 4095), -4351);
assertEquals(Int16.mul(65535, 65535), 1);

assertEquals(Int16.div(0, 1), 0);
assertEquals(Int16.div(0, 2), 0);
assertEquals(Int16.div(1, 255), 0);
assertEquals(Int16.div(2, 2), 1);
assertEquals(Int16.div(3, 2), 1);
assertEquals(Int16.div(4, 2), 2);

assertEquals(Int16.mod(0, 1), 0);
assertEquals(Int16.mod(0, 2), 0);
assertEquals(Int16.mod(1, 255), 1);
assertEquals(Int16.mod(3, 2), 1);
assertEquals(Int16.mod(5, 2), 1);
assertEquals(Int16.mod(4, 2), 0);

assertEquals(Int32.add(0, 0), 0);
assertEquals(Int32.add(1, 1), 2);
assertEquals(Int32.add(2, 2), 4);
assertEquals(Int32.add(3, 3), 6);
assertEquals(Int32.add(4, 4), 8);
assertEquals(Int32.add(1, 255), 256);
assertEquals(Int32.add(2, 255), 257);
assertEquals(Int32.add(3, 255), 258);
assertEquals(Int32.add(255, 255), 510);
assertEquals(Int32.add(65535, 65535), 131070);
assertEquals(Int32.add(4294967295, 1), 0);

assertEquals(Int32.sub(0, 0), 0);
assertEquals(Int32.sub(0, 1), -1);
assertEquals(Int32.sub(0, 2), -2);
assertEquals(Int32.sub(1, 255), -254);
assertEquals(Int32.sub(2, 255), -253);
assertEquals(Int32.sub(3, 255), -252);
assertEquals(Int32.sub(255, 255), 0);

assertEquals(Int32.mul(0, 0), 0);
assertEquals(Int32.mul(1, 1), 1);
assertEquals(Int32.mul(2, 2), 4);
assertEquals(Int32.mul(3, 3), 9);
assertEquals(Int32.mul(4, 4), 16);
assertEquals(Int32.mul(1, 255), 255);
assertEquals(Int32.mul(2, 255), 510);
assertEquals(Int32.mul(3, 255), 765);
assertEquals(Int32.mul(255, 255), 65025);
assertEquals(Int32.mul(255, 4095), 1044225);
assertEquals(Int32.mul(65535, 65535), -131071);

assertEquals(Int32.div(0, 1), 0);
assertEquals(Int32.div(0, 2), 0);
assertEquals(Int32.div(1, 255), 0);
assertEquals(Int32.div(2, 2), 1);
assertEquals(Int32.div(3, 2), 1);
assertEquals(Int32.div(4, 2), 2);

assertEquals(Int32.mod(0, 1), 0);
assertEquals(Int32.mod(0, 2), 0);
assertEquals(Int32.mod(1, 255), 1);
assertEquals(Int32.mod(3, 2), 1);
assertEquals(Int32.mod(5, 2), 1);
assertEquals(Int32.mod(4, 2), 0);

assertEquals(UInt64.fromNumber(0xffffffff).toHex(), "0x00000000ffffffff");
assertEquals(UInt64.fromNumber(4294967296).toHex(), "0x0000000100000000");
assertEquals(UInt64.add(0xffffffff, 1).toHex(), "0x0000000100000000");
assertEquals(UInt64.add(0xffffffff, 2).toHex(), "0x0000000100000001");
assertEquals(UInt64.add(0xffffffff, 3).toHex(), "0x0000000100000002");
assertEquals(UInt64.add(0xffffffff, 0xffffffff).toHex(), "0x00000001fffffffe");
assertEquals(UInt64.max.toHex(), "0xffffffffffffffff");

assertEquals(`${UInt64.add(0xffffffff, 0xffffffff)}`, "0x00000001fffffffe");
assertEquals(`${UInt64.add(UInt64.max, 1)}`, "0x0000000000000000");
assertEquals(`${UInt64.add(UInt64.max, 2)}`, "0x0000000000000001");
assertEquals(+UInt64.add(0xffffffff, 0xffffffff), 8589934590);
assertEquals(+UInt64.max, -1);
assertEquals(+UInt64.add(UInt64.max, 1), 0);
assertEquals(+UInt64.add(UInt64.max, 2), 1);
assertEquals(Number.isSafeInteger(+UInt64.add(0xffffffff, 0xffffffff)), true);
assertEquals(Number.isSafeInteger(+UInt64.max), true);

const maxInt52 = Math.pow(2, 53) - 1;

assertEquals(Number.isSafeInteger(+UInt64.fromNumber(maxInt52)), true);
assertEquals(Number.isSafeInteger(+UInt64.fromNumber(maxInt52 + 1)), false);
assertEquals(UInt64.fromNumber(maxInt52).toHex(), "0x001fffffffffffff");
assertEquals(UInt64.fromNumber(maxInt52 - 1).toHex(), "0x001ffffffffffffe");
assertEquals(+UInt64.fromString("0x001fffffffffffff"), maxInt52);
assertEquals(+UInt64.fromString("0x001ffffffffffffe"), maxInt52 - 1);
assertEquals(UInt64.add(maxInt52, 1).toHex(), "0x0020000000000000");
assertEquals(UInt64.add(maxInt52, 2).toHex(), "0x0020000000000001");
assertEquals(UInt64.add(maxInt52, 2).toHex(), "0x0020000000000001");

assertEquals(UInt64.sub(1, 1).toHex(), "0x0000000000000000");
assertEquals(UInt64.sub(1, 2).toHex(), "0xffffffffffffffff");
assertEquals(UInt64.sub(1, Int32.max).toHex(), "0xffffffff80000002");
assertEquals(UInt64.sub(1, Int32.max >>> 1).toHex(), "0xffffffffc0000002");

assertEquals(UInt64.neg(UInt64.fromString("0x123456789abcdef0")).toHex(), "0xedcba98765432110");
assertEquals(UInt64.neg(1).toHex(), "0xffffffffffffffff");
assertEquals(UInt64.neg(2).toHex(), "0xfffffffffffffffe");
assertEquals(UInt64.neg(-1).toHex(), "0x0000000000000001");
assertEquals(UInt64.neg(-2).toHex(), "0x0000000000000002");
assertEquals(UInt64.fromNumber(Int32.min).toHex(), "0xffffffff80000000");
assertEquals(UInt64.fromNumber(Int32.max).toHex(), "0x000000007fffffff");
assertEquals(UInt64.neg(Int32.min).toHex(), "0x0000000080000000");
assertEquals(UInt64.neg(Int32.max).toHex(), "0xffffffff80000001");

assertEquals(UInt64.shiftLeft(UInt64.fromString("0x123456789abcdef0"), 1).toHex(), "0x2468acf13579bde0");
assertEquals(UInt64.shiftLeft(UInt64.fromString("0x123456789abcdef0"), 4).toHex(), "0x23456789abcdef00");
assertEquals(UInt64.shiftLeft(UInt64.fromString("0x123456789abcdef0"), 32).toHex(), "0x9abcdef000000000");
assertEquals(UInt64.shiftRight(UInt64.fromString("0x123456789abcdef0"), 1).toHex(), "0x091a2b3c4d5e6f78");
assertEquals(UInt64.shiftRight(UInt64.fromString("0x123456789abcdef0"), 32).toHex(), "0x0000000012345678");
