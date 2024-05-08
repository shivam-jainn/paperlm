import React from 'react';
import { Send, Paperclip, Mic } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

export default function ChatBox() {
  return (
    <div className="m-4 mt-2 h-full mb-1 p-3 relative">
      <Textarea
        placeholder="Ask me anything ..."
        className="p-4 min-h-[50px] h-full  rounded-2xl outline-none ring-0 border-none focus:outline-none focus:border-none focus:ring-0 w-full"
      />
      <div className="absolute bottom-5 right-4 flex items-center space-x-4">
     
        <Button
          className="rounded-full p-2 "
          aria-label="Send Message"
        >
          <Send size={20} className="text-white" />
        </Button>
      </div>
    </div>
  );
}
