import { NextRequest, NextResponse } from "next/server";
import prisma from "../../../../../prisma/prisma";
import { getToken } from "next-auth/jwt";

export async function POST(req:NextRequest,res:NextResponse) {
    const token = await getToken({req,secret:process.env.JWT_SECRET});
    console.log(token);   
    try {
        const request = await req.json();
        console.log(request);
        const newNotebook = await prisma.notebook.create({
            data: {
              name: request.name,
              user: { connect: { id: token?.id } },
            },
          });
        
        
        return NextResponse.json({success:true});
        
    } catch (error) {
        console.log(error);
    }
}