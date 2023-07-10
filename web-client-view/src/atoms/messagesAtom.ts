import { Messages } from 'client-core';
import { atom } from 'jotai';

const messagesAtom = atom<Messages>([]);

export { messagesAtom };
