import { Message } from "ai";
export const initialMessages: Message[] = [
    {
      role: "assistant",
      id: "0",
      content:
        "Hi! I am your PDF assistant. I am happy to help with your questions!",
    },
  ];


  interface Data {
    sources: string[];
  }
  
  // Maps the sources with the right ai-message
  export const getSources = (data: Data[], role: string, index: number) => {
    if (role === "assistant" && index >= 2 && (index - 2) % 2 === 0) {
      const sourcesIndex = (index - 2) / 2;
      if (data[sourcesIndex] && data[sourcesIndex].sources) {
        return data[sourcesIndex].sources;
      }
    }
    return [];
  };