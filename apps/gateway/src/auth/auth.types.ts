import { ApiProperty } from '@nestjs/swagger';

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
