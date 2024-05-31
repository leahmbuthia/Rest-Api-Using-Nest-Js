import { AuthService } from './auth.service';
import { Body, Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';
import { AuthDto } from './dto';

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){
    //    authService.test()
    }
    @Post('signup')
    signup( @Body()  dto:AuthDto ){
        console.log({dto,

        });
     return this.authService.signup(dto)
    }
    
    @Post('signin')
    signin(){
       return this.authService.signin
    }

}