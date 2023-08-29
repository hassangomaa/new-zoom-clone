// config/config.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', // Specify the path to your .env file
      isGlobal: true,
    }),
  ],
})
export class CustomConfigModule {}
