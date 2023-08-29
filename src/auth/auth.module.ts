// // auth/auth.module.ts

// import { Module } from '@nestjs/common';
// import { JwtModule } from '@nestjs/jwt';
// import { ConfigModule, ConfigService } from '@nestjs/config';
// import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
// import { JwtStrategy } from './jwt.strategy';
// import { UserModule } from '../user/user.module';
// import { UserService } from '../user/user.service';

// @Module({
//   imports: [
//     UserModule,
//     ConfigModule.forRoot(),
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get('JWT_SECRET'),
//         signOptions: { expiresIn: '1h' },
//       }),
//       inject: [ConfigService],
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy, UserService], // Add UserService as a provider
// })
// export class AuthModule {}
