import React from 'react'
import ChatNav from '@/components/Chat/ChatNav';
import ChatWindow from '@/components/Chat/ChatWindow';
import ChatBox from '@/components/Chat/ChatBox';
import { Chat } from '@/components/Chat/Chat';
export default function Page() {
  return (
    <main className='h-full w-full flex flex-col'>
      <ChatNav notebookName='notebook1'/>
      <Chat />
    </main>
  )
}
