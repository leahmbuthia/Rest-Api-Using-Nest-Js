import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the import path as necessary
import { JwtModule } from '@nestjs/jwt';
import { UserController } from './user.controller';

@Module({
  imports: [PrismaModule,JwtModule.register({})],
  providers: [AuthService],
  exports: [AuthService],
  controllers: [UserController],
})
export class UserModule {}

