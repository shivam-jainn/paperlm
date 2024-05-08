"use client";
import React, { useState } from "react";
import { Button } from "../ui/button"; // Assuming this is the correct path
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"; 
import { Card } from "../ui/card";
import { Checkbox } from "@/components/ui/checkbox"
import { Check,X } from "lucide-react";
export default function ChatNav({ notebookName }: { notebookName: string }) {
  const [pdfFile, setPdfFile] = useState<File | null>(null);
  const [pdfSize, setPdfSize] = useState<number | null>(null);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      console.log(file);
      if (file.size < 10000000 && file.type === "application/pdf") {
        setPdfFile(file);
        setPdfSize(file.size);
      } else {
        alert("File size should be less than 10MB and should be a PDF");
      }
    }
  };

  return (
    <div className="w-full flex justify-between items-center border-b-2 p-4 border-gray-500">
      <div className="text-xl font-semibold">{notebookName}</div>
      <Dialog>
        <DialogTrigger>
          <Button className="rounded-lg text-white focus:outline-none">
            Upload PDF
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Upload your PDF here</DialogTitle>
            <DialogDescription>
              {!pdfFile ? (
                <input type="file" onChange={handleFileChange} />
              ) : (
                ""
              )}

              {pdfFile && (

                <Card className="p-4 flex justify-between">
                  <div className="flex flex-col">
                  <h5 className="card-title">{pdfFile.name}</h5>
                  <p className="card-text">
                    Size: {(pdfFile.size / 1024).toFixed(2)} KB
                  </p>
                  </div>

                  <div className="flex gap-2">
                  <Button className="bg-green-400">
                  <Check />
                  </Button>

                  <Button className="bg-red-400">
                  <X />
                  </Button>
                  </div>
                </Card>
              )}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
}
