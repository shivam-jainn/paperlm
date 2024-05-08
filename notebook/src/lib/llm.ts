import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

export const StreamingModel = new ChatGoogleGenerativeAI({
    model: "gemini-pro",
    maxOutputTokens: 2048,
    verbose: true,
    temperature :0,
    streaming : true
  });


  export const NonStreamingModel = new ChatGoogleGenerativeAI({
    model: "gemini-pro",
    maxOutputTokens: 2048,
    verbose: true,
    temperature :0,
    streaming : false
  });


