import { Utf8String } from '@/index';

const textEncoder = new TextEncoder();

const textDecoder = new TextDecoder();

const stringToUtf8String = (str: string): Utf8String => {
    return textEncoder.encode(str);
};

const utf8StringToString = (utf8String: Utf8String): string => {
    return textDecoder.decode(utf8String);
};

export { stringToUtf8String, utf8StringToString };
