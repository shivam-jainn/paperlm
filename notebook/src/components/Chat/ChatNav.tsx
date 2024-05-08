import React from 'react';
import { Button } from '../ui/button';

export default function ChatNav({ notebookName }: { notebookName: string }) {
  return (
    <div className="w-full flex justify-between items-center border-b-2 p-4 border-gray-500">
      <div className="text-xl font-semibold">{notebookName}</div>
      <Button className="rounded-lg text-white focus:outline-none ">
        Upload PDFs
      </Button>
    </div>
  );
}
