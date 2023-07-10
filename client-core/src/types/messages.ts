import { Utf8String, UuidV4 } from './data';

/**
 * @property {string} id - Message id. This is expected UUID.
 * @property {Uint8Array} text - Message text. This is expected **UTF-8** string, not UTF-16 or something else.
 */
export type Message = {
    id: UuidV4;
    text: Utf8String;
};

/**
 * @property {Message[]} messages - Array of messages.
 */
export type Messages = Message[];
