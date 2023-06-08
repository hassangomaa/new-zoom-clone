import { Module } from '@nestjs/common';
import { RecordingController } from './recording.controller';
import { RecordingService } from './recording.service';
import { PrismaService } from '../../prisma/prisma.service';

@Module({
  controllers: [RecordingController],
  providers: [RecordingService, PrismaService],
})
export class RecordingModule {}
