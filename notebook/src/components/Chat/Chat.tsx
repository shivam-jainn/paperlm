"use client";

import {  initialMessages, getSources } from "@/lib/misc";
import { ChatLine } from "./ChatLine";
import { useChat, Message } from "ai/react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Spinner } from "../spinner";
import { useEffect, useRef } from "react";
import ChatBubble from "./ChatBubble";

export function Chat() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { messages, input, handleInputChange, handleSubmit, isLoading, data } =
    useChat({
      initialMessages,
      api:'/api/chat'
    });

 
  return (
    <div className="rounded-2xl border h-full shadow-lg flex flex-col justify-between">
      <div className="p-6 flex flex-col overflow-auto" ref={containerRef}>
        {messages.map(({ id, role, content }: Message, index) => (
    <div className={`w-full flex  ${role=="user"?"justify-end ":""} `}>
      <ChatBubble
            key={id}
            role={role}
            message={content}
            // Start from the third message of the assistant
            sources={data?.length ? getSources(data, role, index) : []}
          />
    </div>
    
        ))}
      </div>

      <form onSubmit={handleSubmit} className="p-4 flex clear-both">
        <Input
          value={input}
          placeholder={"Type to chat with AI..."}
          onChange={handleInputChange}
          className="mr-2"
        />

        <Button type="submit" className="w-24">
          {isLoading ? <Spinner /> : "Ask"}
        </Button>
      </form>
    </div>
  );
}