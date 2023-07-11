import type { Message } from 'client-core';
import { messagesDatabase } from '@/settings/db';
import { IndexableType } from 'dexie';

const addMessage = async (message: Message): Promise<IndexableType | null> => {
    try {
        const id = await messagesDatabase.messages.add(message);
        return id;
    } catch {
        return null;
    }
};

export { addMessage };
