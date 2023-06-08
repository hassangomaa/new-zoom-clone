import { Injectable } from '@nestjs/common';
import { Prisma, Session } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateSessionDto } from './dto/create-recording.dto';
import { UpdateSessionDto } from './dto/update-recording.dto';

@Injectable()
export class RecordingService {
  constructor(private readonly prisma: PrismaService) {}

  async getAllRecordings(): Promise<Session[]> {
    return this.prisma.getPrisma().session.findMany();
  }

  async getRecordingById(id: number): Promise<Session | null> {
    return this.prisma.getPrisma().session.findUnique({ where: { id } });
  }

  async createRecording(
    createRecordingDto: CreateSessionDto,
  ): Promise<Session> {
    const recordingData: Prisma.SessionCreateInput = {
      ...createRecordingDto,
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
