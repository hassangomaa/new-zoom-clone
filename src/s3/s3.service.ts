import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';

@Injectable()
export class S3Service {
  private s3: S3;

  constructor() {
    // Initialize the AWS SDK S3 client with your credentials and configuration
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });
  }

  async uploadFile(file: Buffer, fileName: string): Promise<string> {
    const uploadParams: S3.PutObjectRequest = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: fileName,
      Body: file,
    };

    const response = await this.s3.upload(uploadParams).promise();
    return response.Location;
  }
}
