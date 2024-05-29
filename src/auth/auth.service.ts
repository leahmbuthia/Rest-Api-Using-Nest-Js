import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{

signup(){
    return {msg: "Hello signed up"};
}

signin(){
    return {msg: "Hello signed in"};
}
}