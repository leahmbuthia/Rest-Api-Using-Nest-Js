import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { ConfigService } from 'nest-config';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(config: ConfigService){
        super({
            datasources:{
                db:{
                    url: config.get('DATABASE_URL'),
                },
            },

        });
        // prisma.user.findMany();
    };
}
