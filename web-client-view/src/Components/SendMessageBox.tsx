import React from 'react';
import { Box, Button, TextField } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { Message, stringToUtf8String, utf8StringToString } from 'client-core';
import { v4 as uuidv4 } from 'uuid';
import { useAtom } from 'jotai';
import { messagesAtom } from '@/atoms/messagesAtom';

const SendMessageBox: React.FC = () => {
    const { t } = useTranslation();

    const [message, setMessage] = React.useState<Message>({
        id: stringToUtf8String(uuidv4()),
        text: stringToUtf8String(''),
    });

    const [messages, setMessages] = useAtom(messagesAtom);

    const onSend = () => {
        setMessages([...messages, message]);

        // FIXME
        setMessage({
            ...message,
            text: stringToUtf8String(''),
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
