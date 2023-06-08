import {
  Controller,
  Get,
  Param,
  Post,
  Put,
  Delete,
  Body,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { RecordingService } from './recording.service';
import { CreateSessionDto } from './dto/create-recording.dto';
import { UpdateSessionDto } from './dto/update-recording.dto';
import { Session } from '@prisma/client';
import { FileInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

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

  // @Post()
  // createRecording(
  //   @Body() createRecordingDto: CreateSessionDto,
  // ): Promise<Session> {
  //   return this.recordingService.createRecording(createRecordingDto);
  // }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  createRecording(
    @Body() createRecordingDto: CreateSessionDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Session> {
    const { originalname, buffer } = file;
    return this.recordingService.createRecording(
      createRecordingDto,
      buffer,
      originalname,
    );
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
