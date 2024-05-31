import { Controller, Get, Req, UseGuards,Patch } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { JwtGuard } from '../auth/guard';
import { User } from '@prisma/client';
import { GetUser } from '../auth/decorator';

@Controller('users')
export class UserController {
    @UseGuards(JwtGuard)
    @Get('me')
    getMe(
        @GetUser('id') user: User,
    @GetUser('email') email:string,)
    {console.log({email});
 return user;
    }
    // @Patch()
    // editUser(
    //     @GetUser('id')
    // )
}
