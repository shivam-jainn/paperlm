import { UpsertDocs } from "@/lib/pinecone";
import { getPineConeClient } from "@/lib/pinecone";
import { Document } from "langchain/document";
import { loadPDF_Chunk } from "./langchain";

 export default async function LCESP(pdf:Buffer) {
        console.log("starting")
        try {
            const pcInstance = await getPineConeClient();
            console.log("Pinecone client created");
            console.log("Creating chunks....");
            const chunks = await loadPDF_Chunk(pdf) as Document<Record<string, any>>[];
            console.log("Chunks created");

            
            const result = await UpsertDocs(pcInstance, chunks);

            console.log("all done",result);

            return true;
        } catch (error) {
            console.log(error);
        }
}
