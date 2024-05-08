import React from 'react';
import ChatBox from './ChatBox';
import ChatBubble from './ChatBubble';
import { ScrollArea } from '../ui/scroll-area';
export interface Message{
    content: string;
    sender: string;
}

const messages: Message[] = [
    {
        content: 'Hello',
        sender: 'user'
    },
    {
        content: 'Hi',
        sender: 'bot'
    },
    {
        content: 'How are you ?',
        sender: 'user'
    },
    {
        content: 'I am fine',
        sender: 'bot'
    },
    {
        content: 'I am fine',
        sender: 'bot'
    },
    {
        content: 'I am fine',
        sender: 'bot'
    },
    {
        content: 'I am fine',
        sender: 'bot'
    },
    {
        content: 'I am fine',
        sender: 'bot'
    }
];

export default function ChatWindow() {
    return (
        <div className=' max-h-[400px] m-4 '>
            <ScrollArea className="h-full rounded-md border p-4 ">

                {messages.map((message: Message, index: number) => (
                    <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                        <ChatBubble message={message} />
                    </div>
                ))}
                </ScrollArea>
        </div>
    );
}
