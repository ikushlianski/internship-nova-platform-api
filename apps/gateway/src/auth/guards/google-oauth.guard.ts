import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class GoogleOauthGuard extends AuthGuard('google') {
  getAuthenticateOptions(context: ExecutionContext) {
    // you can get access to the request object.
    const request = this.getRequest(context);

    return {
      state: encodeURIComponent(`ssr=${request.query.ssr}`),
    };
  }
}
