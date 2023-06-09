// import { Injectable } from '@nestjs/common';
// import { PrismaService } from '../../prisma/prisma.service';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';
// import { User } from '.prisma/client';

// @Injectable()
// export class UserService {
//   constructor(private readonly prisma: PrismaService) {}

//   async createUser(createUserDto: CreateUserDto): Promise<User> {
//     const { email, password } = createUserDto;
//     return this.prisma.getPrisma().user.create({ data: { email, password } });
//   }

//   async findById(id: number): Promise<User | null> {
//     return this.prisma.getPrisma().user.findUnique({ where: { id } });
//   }

//   async updateUser(
//     id: number,
//     updateUserDto: UpdateUserDto,
//   ): Promise<User | null> {
//     const { email, password } = updateUserDto;
//     return this.prisma
//       .getPrisma()
//       .user.update({ where: { id }, data: { email, password } });
//   }

//   async deleteUser(id: number): Promise<User | null> {
//     return this.prisma.getPrisma().user.delete({ where: { id } });
//   }

//   async findByEmail(email: string): Promise<User | null> {
//     return this.prisma.getPrisma().user.findUnique({ where: { email } });
//   }

//   async validateUserById(userId: number): Promise<User | null> {
//     return this.prisma.getPrisma().user.findUnique({ where: { id: userId } });
//   }
// }
