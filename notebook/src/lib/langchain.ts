import { WebPDFLoader } from "langchain/document_loaders/web/pdf";

export async function loadPDF(blob: Blob) {
  try {
    const loader = new WebPDFLoader(blob);
    const docs = await loader.load();
    console.log({ docs });
  } catch (error) {
    console.log(error);
  }
}

// loadPDF()

import { PDFLoader } from "langchain/document_loaders/fs/pdf";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";

export async function loadPDF_FS_Chunked(filePath: string) {
  try {
    const loader = new PDFLoader(filePath);
    const docs = await loader.load();

    const textSplit = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
      chunkOverlap: 100,
    });

    const chunked_docs = await textSplit.splitDocuments(docs);

    console.log({ chunked_docs });
    return chunked_docs;
  } catch (error) {
    console.log(error);
  }
}


import { getPineConeClient } from "./pinecone";
import { getVectors } from "./pinecone";
import {ConversationalRetrievalQAChain} from 'langchain/chains'
import {
  StreamingTextResponse,
  LangChainStream,
  experimental_StreamData
} from 'ai'
import { StreamingModel,NonStreamingModel } from "./llm";
import { STANDALONE_QUESTION_TEMPLATE,QA_TEMPLATE } from "./prompt";
import { error } from "console";


type callChainArgs = {
  question: string;
  chatHistory : string;
}


export async function callChain({question,chatHistory}: callChainArgs) {
  try {
    const stripQ = question.trim().replaceAll("\n", " ");
    const pcClient = await getPineConeClient();
    
    const vectors = await getVectors(pcClient);
    const data = new experimental_StreamData();

    const {stream,handlers} =  LangChainStream();
    
    if (!vectors) {
      throw error("Vectors not found");
    }
    
    const chain = ConversationalRetrievalQAChain.fromLLM(
      StreamingModel,
      vectors?.asRetriever(),
      {
        qaTemplate: QA_TEMPLATE,
        questionGeneratorTemplate: STANDALONE_QUESTION_TEMPLATE,
        returnSourceDocuments: true, //default 4
        questionGeneratorChainOptions: {
          llm: NonStreamingModel,
        },
      }
    );

    chain
      .call(
        {
          question: stripQ,
          chat_history: chatHistory,
        },
        [handlers]
      )
      .then(async (res) => {
        const sourceDocuments = res?.sourceDocuments;
        const firstTwoDocuments = sourceDocuments.slice(0, 2);
        const pageContents = firstTwoDocuments.map(
          ({ pageContent }: { pageContent: string }) => pageContent
        );
        console.log("already appended ", data);
        data.append({
          sources: pageContents,
        });
        data.close();
      });

    // Return the readable stream
    return new StreamingTextResponse(stream, {}, data);
  } catch (error) {
    console.log(error)
  }
}