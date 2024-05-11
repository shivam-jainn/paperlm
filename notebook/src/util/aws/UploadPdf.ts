import {S3Client,PutObjectCommand} from '@aws-sdk/client-s3';

export async function UploadPDF(pdf:Buffer,user_id:string,pdfName:string) {
    const BUCKET = process.env.AWS_BUCKET;
  const strippedFileName = pdfName.replace(/\s+/g, "");
    const IDENTIFIER = user_id+"/pdf/"+strippedFileName
    
    const s3Client = new S3Client({region:process.env.AWS_BUCKET_REGION,
      credentials:{
        accessKeyId:process.env.AWS_ACCESS_KEY as string,
        secretAccessKey : process.env.AWS_SECRET as string
      }
    });

    const command = new PutObjectCommand({
        Bucket: BUCKET,
        Key: IDENTIFIER,
        Body: pdf,
      });

      try {
        await s3Client.send(command);
        console.log(BUCKET+IDENTIFIER);
        
        return IDENTIFIER as string;
      } catch (err) {
        console.error(err);
      }
}