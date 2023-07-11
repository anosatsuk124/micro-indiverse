import type { Message } from 'client-core';
import { atom } from 'jotai';

const messagesAtom = atom<Message[]>([]);

export { messagesAtom };
