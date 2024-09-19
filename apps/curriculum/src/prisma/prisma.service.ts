import { Injectable } from '@nestjs/common';
import { PrismaClient } from 'prisma/prisma-client';


@Injectable()
export class PrismaService extends PrismaClient {
  [x: string]: any;
  constructor() {
    super({
      datasources: {
        db: {
          url: process.env.DATABASE_URL,
        },
      },
    });
  }
}