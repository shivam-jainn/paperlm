import { OpenAIEmbeddings } from "@langchain/openai";



export default async function Embeddings(document:string[]) {
    try {
        const embeddings = new OpenAIEmbeddings({
            apiKey: process.env.OPENAI_API_KEY, // In Node.js defaults to process.env.OPENAI_API_KEY
            model: "text-embedding-3-small",
            dimensions:1024
          });

        const vectors = await embeddings.embedDocuments(document);
        return vectors;
    } catch (error) {
        console.log(error);
    }
}