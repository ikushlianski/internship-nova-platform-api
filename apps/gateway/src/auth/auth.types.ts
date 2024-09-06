import { ApiProperty } from '@nestjs/swagger';

export class AuthResponse {
  @ApiProperty()
  success: boolean;

  @ApiProperty()
  token: string;
}

export class ParsedUserData {
  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @ApiProperty({ description: 'Indicates whether the user has accepted the terms and conditions.' })
  hasAcceptedTerms: boolean;


}
