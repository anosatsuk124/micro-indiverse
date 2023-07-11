import React from 'react';
import { Chip, Container, Stack } from '@mui/material';
import { useAtom } from 'jotai';
import { messagesAtom } from '@/atoms/messagesAtom';
import { Message, utf8StringToString } from 'client-core';

const MessageBox: React.FC<{ msg: Message }> = (props) => {
    const message = utf8StringToString(props.msg.text);

    return (
        <Chip
            sx={{
                height: '5vh',
                '& .MuiChip-label': {
                    display: 'block',
                    whiteSpace: 'normal',
                },
            }}
            label={message}
        />
    );
};

const MessagesHistory: React.FC = () => {
    const [messages] = useAtom(messagesAtom);

    return (
        <Container sx={{ overflow: 'auto', height: '80vh' }}>
            <Stack spacing={2}>
                {messages.map((msg, index) => (
                    <MessageBox msg={msg} key={index} />
                ))}
            </Stack>
        </Container>
    );
};

export default MessagesHistory;
