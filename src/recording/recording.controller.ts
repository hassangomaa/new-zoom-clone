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
import { FileInterceptor } from '@nestjs/platform-express';
import { RecordingService } from './recording.service';
import { CreateSessionDto } from './dto/create-recording.dto';
import { UpdateSessionDto } from './dto/update-recording.dto';
import { Session } from '@prisma/client';
import { S3Service } from '../s3/s3.service';

@Controller('recordings')
// @UseGuards(JwtAuthGuard) // Apply JwtAuthGuard to secure the routes
export class RecordingController {
  constructor(
    private readonly recordingService: RecordingService,
    private readonly s3Service: S3Service,
  ) {}

  @Get()
  getAllRecordings(): Promise<Session[]> {
    return this.recordingService.getAllRecordings();
  }

  @Get(':id')
  getRecordingById(@Param('id') id: string): Promise<Session | null> {
    return this.recordingService.getRecordingById(Number(id));
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  async createRecording(
    @Body() createRecordingDto: CreateSessionDto,
    @UploadedFile() file: Express.Multer.File,
  ): Promise<Session> {
    const { originalname, buffer } = file;
    const fileUrl = await this.s3Service.uploadFile(file);

    const recordingData: any = {
      ...createRecordingDto,
      fileUrl,
      name: 'Recording Name', // Provide a name for the recording
      startTime: new Date(), // Provide the start time of the recording
      endTime: new Date(), // Provide the end time of the recording
    };

    return this.recordingService.createRecording(recordingData, file);
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
