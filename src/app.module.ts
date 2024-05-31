import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { BookmarkModule } from './bookmark/bookmark.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from 'nest-config';



@Module({
  imports: [
    ConfigModule. forRoot({IIsGlobal: true}),AuthModule, UserModule, BookmarkModule, PrismaModule],

})
export class AppModule {}
