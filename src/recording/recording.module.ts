import { Module } from '@nestjs/common';
import { RecordingController } from './recording.controller';
import { RecordingService } from './recording.service';
import { PrismaService } from '../../prisma/prisma.service';
import { S3Module } from 'src/s3/s3.module';

@Module({
  imports: [S3Module], // Add the S3Module here
  controllers: [RecordingController],
  providers: [RecordingService, PrismaService],
})
export class RecordingModule {}
