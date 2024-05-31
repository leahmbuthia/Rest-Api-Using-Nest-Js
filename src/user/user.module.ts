import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth.service';
import { PrismaModule } from '../prisma/prisma.module'; // Adjust the import path as necessary

@Module({
  imports: [PrismaModule],
  providers: [AuthService],
  exports: [AuthService],
})
export class UserModule {}

