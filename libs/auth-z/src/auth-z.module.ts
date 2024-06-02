import { Module } from '@nestjs/common';
import { AuthZService } from './auth-z.service';

@Module({
  providers: [AuthZService],
  exports: [AuthZService],
})
export class AuthZModule {}
