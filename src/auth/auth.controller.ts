import { AuthService } from './auth.service';
import { Controller, Post, Req } from "@nestjs/common";
import { Request } from 'express';

@Controller('auth')
export class AuthController{
    constructor(private authService:AuthService){
    //    authService.test()
    }
    @Post('signup')
    signup(@Req() req: Request){
        console.log(req.body);

     return this.authService.signup
    }
    
    @Post('signin')
    signin(){
       return this.authService.signin
    }

}