"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { NotebookPen, CircleUser } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogFooter
} from "@/components/ui/dialog"
import { Label } from './ui/label';
import { Input } from './ui/input';
import { useToast } from "@/components/ui/use-toast"

export default function SideNav() {
    const [notebooks, setNotebooks] = useState([]);
    const [newNotebookName, setNewNotebookName] = useState(""); // State to capture input
    const { toast } = useToast()
    const [openDia,setOpenDia] = useState(false);

    useEffect(() => {
        fetch('/api/notebooks')
            .then((res) => res.json())
            .then((data) => {
                setNotebooks(data);
            }).then(() => {
                console.log(notebooks)
            })
    }, []);

    const handleCreateNotebook = async (e) => {
        e.preventDefault();
        const name = newNotebookName; // Use the captured input value
        const res = await fetch('/api/create/notebook', {
            method: 'POST',
            body: JSON.stringify({ name })
        });

        if (res.ok) {
            toast({
                title: `Created : ${name} `,
                description: "Woop Woop ! Nail the exam before it nails you ;)",
            })

            setOpenDia(false);

        }
    }

    return (
        <div className="h-screen flex flex-col bg-gray-100">
            <div className="flex-grow overflow-y-auto">
                <ScrollArea className="p-4">
                    {notebooks.map((notebook) => (
                        <Button key={notebook.id} variant="ghost" size="lg" className="w-full rounded-none mb-2">
                            <Link href={`/notebook/${notebook.name}`} key={notebook.id}>
                                {notebook.name}
                            </Link>
                        </Button>
                    ))}
                </ScrollArea>
            </div>

            <div className="flex flex-col items-center justify-center">
                <Dialog open={openDia} onOpenChange={()=>setOpenDia(!openDia)}>
                    <DialogTrigger>
                        <Button className="w-[100%] flex items-center justify-center gap-2 px-6 py-4 rounded-2xl" >
                            <NotebookPen size={16} />
                            Add Notebook
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Create a Notebook</DialogTitle>
                            <DialogDescription>
                                Add a new notebook to your collection
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <div className="grid grid-cols-4 items-center gap-4">
                                <Label htmlFor="name" className="text-right">
                                    Name
                                </Label>
                                <Input
                                    id="name"
                                    value={newNotebookName} // Bind input value to state
                                    onChange={(e) => setNewNotebookName(e.target.value)} // Handle input change
                                    className="col-span-3"
                                />
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="button" onClick={handleCreateNotebook}>Create</Button> {/* Change type to 'button' */}
                        </DialogFooter>
                    </DialogContent>
                </Dialog>

                <Button variant="ghost" className=" w-full mt-4 hover:bg-zinc-400 flex items-center justify-center gap-2 px-6 py-4 rounded-none ">
                    <CircleUser size={16} />
                    My Account
                </Button>
            </div>
        </div>
    );
}
