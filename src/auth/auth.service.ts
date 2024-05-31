import { ForbiddenException, Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { AuthDto } from "./dto";
import * as argon from 'argon2'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

@Injectable({})
export class AuthService{
    constructor (private prisma: PrismaService){}

 async signup(dto: AuthDto){
    // generate the passwprd hash
    const hash =await argon.hash(dto.password);

try {
        // save the user in the db
        const user = await this.prisma.user.create({
            data:{
                email:dto.email,
                hash,
            },
        });
        // return the saved user,excluding the hash from the response
        const { hash: _, ...result } = user;
        return result;
    }
 catch (error) {
    if(error instanceof PrismaClientKnownRequestError){
        if(error.code === 'P2002') {
            throw new ForbiddenException(
                'Credentials taken'
            )
        }
    }
    throw error;
}
 }

signin(){
    // find user by email
    // if user does not exist throw exception
    // compare password
    // send back feedback 
    return {msg: "Hello signed in"};
}
}