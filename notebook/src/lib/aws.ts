import S3,{S3Client,PutObjectCommand} from '@aws-sdk/client-s3';

export async function UploadPDFFile(pdf:Buffer,user_id:string,fileName:string) {
    const BUCKET = process.env.AWS_BUCKET;
  const strippedFileName = fileName.replace(/\s+/g, "");
    const IDENTIFIER = user_id+"/file/"+strippedFileName
    
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

const getFileFromS3 = async (key: string): Promise<Buffer> => {
    try {
      const params: S3.Types.GetObjectRequest = {
        Bucket: process.env.S3_BUCKET_NAME,
        Key: key,
      };
  
      const data = await s3.getObject(params).promise();
      return data.Body as Buffer;
    } catch (error) {
      console.error('Error getting file from S3:', error);
      throw error;
    }
  };