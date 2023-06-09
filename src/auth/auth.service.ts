// // auth/auth.service.ts

// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { JwtService } from '@nestjs/jwt';
// import { UserService } from '../user/user.service';
// import { User } from '.prisma/client';

// @Injectable()
// export class AuthService {
//   constructor(
//     private readonly userService: UserService,
//     private readonly jwtService: JwtService,
//   ) {}

//   async validateUserByEmailAndPassword(
//     email: string,
//     password: string,
//   ): Promise<User | null> {
//     const user = await this.userService.findByEmail(email);

//     if (user && user.password === password) {
//       return user;
//     }

//     return null;
//   }

//   async login(user: User): Promise<{ accessToken: string }> {
//     const payload = { email: user.email, sub: user.id };

//     return {
//       accessToken: this.jwtService.sign(payload),
//     };
//   }

//   async validateUserById(userId: number): Promise<User | null> {
//     return this.userService.findById(userId);
//   }
// }
