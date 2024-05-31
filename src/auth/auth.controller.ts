import { AuthService } from './auth.service';
import { Body, Controller, Post, Req } from "@nestjs/common";
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
    signin(@Body()  dto:AuthDto ){
       return this.authService.signin(dto)
    }

}