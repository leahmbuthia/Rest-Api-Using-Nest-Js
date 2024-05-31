import { ConfigService } from "@nestjs/config";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";

export class JwtStrategy extends PassportStrategy(
    Strategy,
){
    constructor(
        config: ConfigService,
        private prisma: PrismaService,
      ) {
        super({
          jwtFromRequest:
            ExtractJwt.fromAuthHeaderAsBearerToken(),
          secretOrKey: config.get('JWT_SECRET'),
        });
      }
}