import LCESP from "@/lib/final";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest,res:NextResponse) {
    try {
        const result = await LCESP()
        console.log(result);
        NextResponse.json({result})
    } catch (error) {
        console.log(error);
    }
}