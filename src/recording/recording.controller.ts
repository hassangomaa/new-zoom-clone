import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
} from '@nestjs/common';
import { RecordingService } from './recording.service';
import { CreateSessionDto } from './dto/create-recording.dto';
import { UpdateSessionDto } from './dto/update-recording.dto';
import { Session } from '@prisma/client';

@Controller('recordings')
export class RecordingController {
  constructor(private readonly recordingService: RecordingService) {}

  @Get()
  getAllRecordings(): Promise<Session[]> {
    return this.recordingService.getAllRecordings();
  }

  @Get(':id')
  getRecordingById(@Param('id') id: string): Promise<Session | null> {
    return this.recordingService.getRecordingById(Number(id));
  }

  @Post()
  createRecording(
    @Body() createRecordingDto: CreateSessionDto,
  ): Promise<Session> {
    return this.recordingService.createRecording(createRecordingDto);
  }

  @Put(':id')
  updateRecording(
    @Param('id') id: string,
    @Body() updateRecordingDto: UpdateSessionDto,
  ): Promise<Session | null> {
    return this.recordingService.updateRecording(
      Number(id),
      updateRecordingDto,
    );
  }

  @Delete(':id')
  deleteRecording(@Param('id') id: string): Promise<Session | null> {
    return this.recordingService.deleteRecording(Number(id));
  }
}
