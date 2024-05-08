import { OpenAIEmbeddings } from '@langchain/openai';
import { Pinecone } from '@pinecone-database/pinecone'
import { Document } from 'langchain/document';
import {PineconeStore} from '@langchain/pinecone'

export async function UpsertDocs(pcInstance:Pinecone,docs:Document[]){
    try {
        const indexName = process.env.INDEX_NAME as string;

        const index = pcInstance.index(indexName);


        const embeddings = new OpenAIEmbeddings({verbose:true, apiKey: process.env.OPENAI_API_KEY as string,model:"text-embedding-3-small" });

        await PineconeStore.fromDocuments(docs,embeddings,{
            pineconeIndex : index,
        });

    } catch (error) {
        console.log(error);
                
    }

}


let pcInstance: Pinecone|null = null;

export async function getPineConeClient(){
    if(!pcInstance){
      pcInstance = new Pinecone({ apiKey: process.env.PINECONE_API_KEY as string });
    }
  
    return pcInstance;
  }

export async function getVectors(client : Pinecone){
    try {
        const embeddings = new OpenAIEmbeddings({verbose:true, apiKey: process.env.OPENAI_API_KEY as string,model:"text-embedding-3-small" });
        const index = client.index(process.env.INDEX_NAME as string);

        const vectors = await PineconeStore.fromExistingIndex(embeddings,{
            pineconeIndex:index,
            textKey : "text",
        });

        return vectors;
    } catch (error) {
        console.log(error);
    }
}


export function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }


export async function pcCreateIndex(pcInstance: Pinecone, indexName: string) {
    try {
      await pcInstance.createIndex({
        name: indexName,
        dimension: 1536,
        metric: 'cosine',
        spec: { 
          serverless: { 
            cloud: 'aws', 
            region: 'us-east-1' 
          }
        } 
      });
      console.log(
        `Waiting for ${process.env.INDEX_INIT_TIMEOUT} seconds for index initialization to complete...`
      );
      let timeoutnum = parseInt(process.env.INDEX_INIT_TIMEOUT as string,10)
    await delay(timeoutnum);        
    console.log("Index created !!");
    } catch (error) {
      console.error("error ", error);
      throw new Error("Index creation failed");
    }
  }
  
