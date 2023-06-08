import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordingModule } from './recording/recording.module';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { RecordingController } from './recording/recording.controller';
import { RecordingService } from './recording/recording.service';
import { AuthService } from './auth/auth.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'uploads'),
      serveRoot: '/uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'views'),
    }),
    AuthModule,
    RecordingModule,

  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})


// @Module({

//   imports: [
//     RecordingModule, AuthModule],
//   controllers: [AppController],
//   providers: [AppService, PrismaService],
// })
export class AppModule {}
