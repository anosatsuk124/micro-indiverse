import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Message, stringToUtf8String, utf8StringToString } from 'client-core';
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from 'jotai';
import { messagesAtom } from '@/atoms/messagesAtom';
import { addMessage } from '@/features/updateMessage';

const SendMessageBox: React.FC = () => {
    const { t } = useTranslation();

    const [message, setMessage] = React.useState<Message>({
        id: stringToUtf8String(uuidv4()),
        user_id: stringToUtf8String(uuidv4()),
        text: stringToUtf8String(''),
        timestamp: null,
    });

    //FIXME
    const [messages, setMessages] = useAtom(messagesAtom);

    const onSend = () => {
        const messageWithTimestamp = {
            ...message,
            timestamp: new Date(),
        };
        setMessage(messageWithTimestamp);
        console.log(messageWithTimestamp);
        addMessage(messageWithTimestamp).catch((e) => console.log(e));

        setMessages([...messages, messageWithTimestamp]);

        // FIXME
        setMessage({
            ...message,
            text: stringToUtf8String(''),
            id: stringToUtf8String(uuidv4()),
        });
    };

    return (
        <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
            <TextField
                label={t('chats-ui.input-placeholder')}
                multiline
                fullWidth
                value={utf8StringToString(message.text)}
                onChange={(e) =>
                    setMessage({
                        ...message,
                        text: stringToUtf8String(e.target.value),
                    })
                }
            />
            <Button variant="contained" onClick={onSend}>
                {t('chats-ui.send-button')}
            </Button>
        </Box>
    );
};

export default SendMessageBox;
