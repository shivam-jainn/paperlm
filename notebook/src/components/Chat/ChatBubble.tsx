import React from 'react'
import { Message } from './ChatWindow'

export default function ChatBubble({ message }: { message: Message }) {
  const bubbleClass = message.sender === "user" ? "bg-blue-100 text-blue-900 self-end" : "bg-gray-100 text-gray-900 self-start";

  return (
    <div className={`rounded-lg py-2 px-4 mb-2 max-w-md ${bubbleClass}`}>
      {message.content}
    </div>
  );
}
