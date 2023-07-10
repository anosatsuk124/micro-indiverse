import React from 'react';
import { Container } from '@mui/material';
import SendMessageBox from '@/Components/SendMessageBox';
import MessagesHistory from '@/Components/MessagesHistory';

const App: React.FC = () => {
    return (
        <Container fixed>
            <MessagesHistory />
            <SendMessageBox />
        </Container>
    );
};

export default App;
