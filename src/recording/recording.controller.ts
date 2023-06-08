import {
  Controller,
  Get,
  Param,
  Post,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
import { RecordingService } from './recording.service';
import { CreateSessionDto } from './dto/create-recording.dto';
import { UpdateSessionDto } from './dto/update-recording.dto';

@Controller('recordings')
export class RecordingController {
  constructor(private readonly recordingService: RecordingService) {}

  @Get()
  getAllRecordings() {
    return this.recordingService.getAllRecordings();
  }

  @Get(':id')
  getRecordingById(@Param('id') id: number) {
    return this.recordingService.getRecordingById(id);
  }

  @Post()
  createRecording(@Body() createRecordingDto: CreateSessionDto) {
    return this.recordingService.createRecording(createRecordingDto);
  }

  @Put(':id')
  updateRecording(
    @Param('id') id: number,
    @Body() updateRecordingDto: UpdateSessionDto,
  ) {
    return this.recordingService.updateRecording(id, updateRecordingDto);
  }

  @Delete(':id')
  deleteRecording(@Param('id') id: number) {
    return this.recordingService.deleteRecording(id);
  }
}
