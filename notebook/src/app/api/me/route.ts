import { NextRequest,NextResponse } from "next/server";
import prisma from "../../../../prisma/prisma";
export async function GET(req:NextRequest,res:NextResponse) {
    try {
        const {searchParams} = new URL(req.url);
        const params = searchParams.get('notebookName') as string;
        console.log(params);
        const notebook = await prisma.notebook.findFirst({
            where: {
              name: params,
            },
        });
        console.log(notebook);

        return NextResponse.json({"notebook":notebook?.name});
    } catch (error) {
        console.log(error);
    }
}