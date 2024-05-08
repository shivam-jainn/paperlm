import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NotebookPen, CircleUser } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

export default function SideNav() {
    const notebooks = [
        { id: 1, name: 'Notebook 1' },
        { id: 2, name: 'Notebook 2' },
        // Add more notebooks as needed
    ];

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <div className="flex-grow overflow-y-auto">
                <ScrollArea className="p-4">
                    {notebooks.map((notebook) => (
                        <Button key={notebook.id} variant="ghost" size="lg" className="w-full rounded-none mb-2">
                            <Link href={`/notebook/${notebook.id}`} key={notebook.id}>
                                {notebook.name}
                            </Link>
                        </Button>
                    ))}
                </ScrollArea>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Button  className="w-[80%] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl">
                    <NotebookPen size={16} />
                    Add Notebook
                </Button>
                <Button variant="ghost" className=" w-full mt-4 hover:bg-zinc-400 flex items-center justify-center gap-2 px-6 py-4 rounded-none ">
                    <CircleUser size={16} />
                    My Account
                </Button>
            </div>
        </div>
    );
}
