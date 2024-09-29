import { ApiProperty } from '@nestjs/swagger';

import { UserPayload } from 'apps/shared-logic/src/auth/user.types';

export class AuthResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  token: string;
}

export class ParsedUserData {
  @ApiProperty()
  first_name: string;

  @ApiProperty()
  last_name: string;

  @ApiProperty()
  user_email: string;
}

export interface RequestWithUser extends Request {
  user: UserPayload;
}
