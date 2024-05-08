import { getPineConeClient } from "@/lib/pinecone";
import {pcCreateIndex} from '@/lib/pinecone';
import { NextRequest, NextResponse } from "next/server";
export async function GET(req:NextRequest,res:NextResponse){
    try {
        const pcInstance = await getPineConeClient();
        const result =  pcCreateIndex(pcInstance,"notebook");

        NextResponse.json(result);
    } catch (error) {
        console.log(error);
    }
}