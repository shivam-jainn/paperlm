"use client";
import React, { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ChatNav from '@/components/Chat/ChatNav';
import ChatWindow from '@/components/Chat/ChatWindow';
import ChatBox from '@/components/Chat/ChatBox';
import { Chat } from '@/components/Chat/Chat';
import prisma from '../../../prisma/prisma';

function Page() {
  const [notebookName, setNotebookName] = useState<string | null>(null);
  const notebookParams = useSearchParams();
  const router = useRouter();
  async function getNBName(qNB: string){
    const notebook = await fetch(`/api/me?notebookName=${qNB}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(async (response) => {
        await response.json()
        console.log(response);
        return response;
      })
      .then((data) => {
        console.log(data)

        return data;
      })
      .catch((error) => {
        console.error('Error fetching notebook:', error);
        return [];      
    })

    return notebook;
  }
  useEffect(() => {
    const fetchNotebookData = async () => {
      console.log("inside...............f1")
      const qNB = notebookParams.get('notebookName') as string;
      const nbNameExists = notebookParams.has('notebookName');
      console.log("nbNameExists",nbNameExists)
      console.log("qNB",qNB)

      if (!nbNameExists) {
        setNotebookName('Unsaved Notebook');
        console.log("set");
      } else {
        try {
          const notebook = await getNBName(qNB);
          console.log("notebook",notebook);

          const notebookName = notebook;
          console.log('Notebook name:', notebookName);
          console.log(qNB);
          if(notebookName == qNB) {
            setNotebookName(qNB);
          }
          else {
            router.push('/me');
          }
        } catch (error) {
          console.error('Error fetching notebook:', error);
          // Handle error
        }
      }
    };
    console.log("inside...............")
    fetchNotebookData();
  }, [notebookParams,router]);

  return (
    <main className='h-full w-full flex flex-col'>
      <ChatNav notebookName={notebookName as string} />
      <div className='pt-8 px-4 h-full'>
      <Chat />
      </div>
    </main>
  );
}

export default Page;