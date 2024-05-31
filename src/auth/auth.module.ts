import { JwtStrategy } from './strategy/jwt.strategy';
import { ConfigModule } from '@nestjs/config';
import { AuthController } from './auth.controller';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import {JwtModule, JwtService} from '@nestjs/jwt';


@Module({ 
    imports: [JwtModule.register({}),ConfigModule],
 
    controllers:[AuthController],
    providers: [AuthService, JwtStrategy],
})
export class AuthModule{}