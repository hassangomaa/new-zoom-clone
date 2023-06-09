import { Injectable } from '@nestjs/common';
import { S3 } from 'aws-sdk';
import * as multer from 'multer';
import { Multer } from 'multer';

@Injectable()
export class S3Service {
  private readonly s3: S3;
  private readonly upload: Multer;

  constructor() {
    // Initialize the AWS SDK S3 client with your credentials and configuration
    this.s3 = new S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
      region: process.env.AWS_REGION,
    });

    // Configure multer for file upload
    this.upload = multer({
      storage: multer.memoryStorage(),
      limits: {
        fileSize: 5 * 1024 * 1024,
      },
    });
  }

  async uploadFile(file: Express.Multer.File): Promise<string> {
    const uploadParams: S3.PutObjectRequest = {
      Bucket: process.env.AWS_S3_BUCKET_NAME,
      Key: file.originalname,
      Body: file.buffer,
    };

    const response = await this.s3.upload(uploadParams).promise();
    return response.Location;
  }
}