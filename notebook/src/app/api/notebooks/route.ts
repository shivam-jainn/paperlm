import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
export async function GET(req:NextRequest,res:NextResponse) {
    try {
        const notebooks = await prisma.notebook.findMany({});
        
        return NextResponse.json(notebooks);
    } catch (error) {
        console.log(error)
    }
}