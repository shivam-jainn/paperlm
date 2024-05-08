import { UpsertDocs } from "@/lib/pinecone";
import { getPineConeClient } from "@/lib/pinecone";
import { Document } from "langchain/document";
import { loadPDF_FS_Chunked } from "./langchain";

 export default async function LCESP() {
        console.log("starting")
        try {
            const pcInstance = await getPineConeClient();
            console.log("Pinecone client created");
            console.log("Creating chunks....");
            const filePath = "/home/shivam/Code/nbLLM/notebook/src/assets/atmlia2u4.pdf"
            const chunks = await loadPDF_FS_Chunked(filePath) as Document<Record<string, any>>[];
            console.log("Chunks created");

            
            const result = await UpsertDocs(pcInstance, chunks);

            console.log("Upserted docs");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
}
