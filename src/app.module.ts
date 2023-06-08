import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordingModule } from './recording/recording.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { RecordingController } from './recording/recording.controller';
import { RecordingService } from './recording/recording.service';

@Module({
  imports: [RecordingModule, AuthModule],
  controllers: [AppController, RecordingController],
  providers: [AppService, PrismaService, RecordingService],
})
export class AppModule {}
