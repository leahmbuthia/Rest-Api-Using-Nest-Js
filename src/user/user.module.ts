import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the import path as necessary
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [PrismaModule,JwtModule.register({})],
  providers: [AuthService],
  exports: [AuthService],
})
export class UserModule {}

