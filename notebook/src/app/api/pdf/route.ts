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

import { UploadPDF } from "@/util/aws/UploadPdf";

export async function POST(req: NextRequest, res: NextResponse) {
    try {
        const formdata = await req.formData();
        const pdf =  formdata.get("pdf") as File; // Assuming pdf is stored as Buffer in formdata
        const user_id =  formdata.get("user_id") as string;
        const pdfName =  formdata.get("pdfName") as string;
        // You may need to adjust the conversion method according to how pdf is stored in the formdata
        if (!pdf) {
            throw new Error("PDF file not found in form data");
        }

        const arrayBuffer = await pdf.arrayBuffer();
        
        // Convert the ArrayBuffer to Buffer
        const BufferPDF = Buffer.from(arrayBuffer);

        
        const result = await UploadPDF(BufferPDF, user_id, pdfName);
        console.log(result);
        if(result){
            const fresult = await LCESP()
            NextResponse.json({ fresult, pdfName });
        }else{
            throw new Error("PDF Upload failed");
        }
    } catch (error) {
        console.log(error);
        NextResponse.json({error:'Internal Server Error'});
    }
}
