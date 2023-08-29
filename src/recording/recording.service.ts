import { Injectable } from '@nestjs/common';
import { Prisma, Session } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSessionDto } from './dto/create-recording.dto';
import { UpdateSessionDto } from './dto/update-recording.dto';
import { S3Service } from '../s3/s3.service';

@Injectable()
export class RecordingService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly s3Service: S3Service,
  ) {}

  async getAllRecordings(): Promise<Session[]> {
    return this.prisma.getPrisma().session.findMany();
  }

  async getRecordingById(id: number): Promise<Session | null> {
    return this.prisma.getPrisma().session.findUnique({ where: { id } });
  }

  async createRecording(
    createRecordingDto: CreateSessionDto,
    file: Express.Multer.File,
  ): Promise<Session> {
    const { originalname, buffer } = file;
    const fileUrl = await this.s3Service.uploadFile(file);
    const recordingData: Prisma.SessionCreateInput = {
      ...createRecordingDto,
      fileUrl,
    };
    return this.prisma.getPrisma().session.create({ data: recordingData });
  }

  async updateRecording(
    id: number,
    updateRecordingDto: UpdateSessionDto,
  ): Promise<Session | null> {
    const recordingData: Prisma.SessionUpdateInput = {
      ...updateRecordingDto,
    };
    return this.prisma
      .getPrisma()
      .session.update({ where: { id }, data: recordingData });
  }

  async deleteRecording(id: number): Promise<Session | null> {
    return this.prisma.getPrisma().session.delete({ where: { id } });
  }
}
