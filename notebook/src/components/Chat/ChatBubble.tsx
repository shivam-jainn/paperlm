import React from 'react'
import { formattedText } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Message } from "ai/react";
import ReactMarkdown from "react-markdown";

export default function ChatBubble({ message, role, sources }: { message: string, role: string, sources?: string[] }) {
  const bubbleClass = role === "user" ? "bg-blue-100 text-blue-900 justify-end  backdrop-blur-lg shadow-lg shadow-blue-100" : "bg-gray-100 text-gray-900 items-start   backdrop-blur-lg shadow-lg shadow-gray-100";

  const convertNewLines = (text: string) =>
    text.split("\n").map((line, i) => (
      <span key={i}>
        {line}
        <br />
      </span>
    ));

  const formattedMessage = convertNewLines(message);

  return (
    <div className={`rounded-lg py-2 px-4 mb-2 max-w-md flex justify-${role === 'user' ? 'end' : 'start'}`}>
      <div className={`rounded-lg py-2 px-4 ${bubbleClass}`}>
        {formattedMessage}
        {sources && sources.length ? (
          <div className="w-full">
            {sources.map((source, index) => (
              <div key={index}>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value={`source-${index}`}>
                    <AccordionTrigger>{`Source ${index + 1}`}</AccordionTrigger>
                    <AccordionContent>
                      <ReactMarkdown>{formattedText(source)}</ReactMarkdown>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}