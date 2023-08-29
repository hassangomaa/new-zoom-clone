import { Injectable } from '@nestjs/common';
import { PrismaClient, Session } from '@prisma/client';

@Injectable()
export class PrismaService {
  prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }

  getPrisma(): PrismaClient {
    return this.prisma;
  }
}

export { Session };
