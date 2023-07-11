import Dexie, { Table } from 'dexie';
import type { Message } from 'client-core';

export class MessagesDatabase extends Dexie {
    messages!: Table<Message>;

    constructor() {
        super('MessagesDatabase');
        this.version(1).stores({
            messages: '++id, user_id, text, timestamp',
        });
    }
}

export const messagesDatabase = new MessagesDatabase();
