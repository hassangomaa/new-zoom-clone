import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports: [
    JwtModule.register({
      /* JwtModule options */
    }),
  ],
  providers: [AuthService, JwtStrategy],
})
export class AuthModule {}
