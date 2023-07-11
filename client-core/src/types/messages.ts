import { Utf8String, UuidV4 } from './data';

/**
 * @property {string} id - Message id. This is expected UUID.
 * @property {string} user_id - User id. This is expected UUID.
 * @property {Uint8Array} text - Message text. This is expected **UTF-8** string, not UTF-16 or something else.
 * @property {Date} timestamp - Message timestamp. This is expected to be in UTC.
 */
export type Message = {
    id: UuidV4;
    user_id: UuidV4;
    text: Utf8String;
    timestamp: Date | null;
};
