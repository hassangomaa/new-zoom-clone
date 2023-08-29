import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RecordingModule } from './recording/recording.module';
// import { AuthModule } from './auth/auth.module';
import { PrismaService } from 'prisma/prisma.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';
import { S3Module } from './s3/s3.module';
import { MulterModule } from '@nestjs/platform-express';
// import { UserController } from './user/user.controller';
// import { UserModule } from './user/user.module';
import { CustomConfigModule } from 'src/config/config.module';

@Module({
  imports: [
    MulterModule.register({
      dest: './uploads', // Specify the destination folder to store the uploaded files
    }),
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'uploads'),
      serveRoot: '/uploads',
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public', 'views'),
    }),
    RecordingModule,
    // AuthModule,
    S3Module,
    // UserModule,
    CustomConfigModule,
  ],
  controllers: [
    AppController,
    // UserController
  ],
  providers: [AppService, PrismaService],
})
export class AppModule {}
