import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Constants } from './constants';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async createToken(payload: any): Promise<string> {
    return this.jwtService.sign(payload, { secret: Constants.JWT_SECRET });
  }

  // Other authentication-related methods
}
