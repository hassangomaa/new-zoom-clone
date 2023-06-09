// // auth/auth.controller.ts

// import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { LoginDto } from './dto/login.dto';

// @Controller('auth')
// export class AuthController {
//   constructor(private readonly authService: AuthService) {}

//   @Post('login')
//   async login(@Body() loginDto: LoginDto): Promise<{ accessToken: string }> {
//     const { email, password } = loginDto;
//     const user = await this.authService.validateUserByEmailAndPassword(
//       email,
//       password,
//     );

//     if (!user) {
//       throw new UnauthorizedException('Invalid credentials');
//     }

//     return this.authService.login(user);
//   }
// }
