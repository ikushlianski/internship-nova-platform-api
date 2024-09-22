import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ClientProxy } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { SERVICE_NAMES } from '../service-names';
import { ParsedUserData } from './auth.types';

describe('AuthService', () => {
  let authService: AuthService;
  let clientProxy: ClientProxy;
  let jwtService: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: SERVICE_NAMES.USERS_SERVICE,
          useValue: {
            send: jest.fn(),
          },
        },
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    clientProxy = module.get<ClientProxy>(SERVICE_NAMES.USERS_SERVICE);
    jwtService = module.get<JwtService>(JwtService);
  });

  describe('createUser', () => {
    it('should call client.send with correct parameters', async () => {
      const userDto: ParsedUserData = {
        user_email: 'test@example.com',
        first_name: 'John',
        last_name: 'Doe',
      };
      const user = { id: 1, ...userDto };

      (clientProxy.send as jest.Mock).mockResolvedValue(user);

      const result = await authService.createUser(userDto);
      expect(clientProxy.send).toHaveBeenCalledWith({ cmd: 'create_user' }, userDto);
      expect(result).toEqual(user);
    });
  });

  describe('generateJwtToken', () => {
    it('should call jwtService.sign with correct payload', () => {
      const user: ParsedUserData = {
        user_email: 'test@example.com',
        first_name: 'John',
        last_name: 'Doe',
      };
      const token = 'jwt-token';
      (jwtService.sign as jest.Mock).mockReturnValue(token);

      const result = authService.generateJwtToken(user);
      expect(jwtService.sign).toHaveBeenCalledWith(
        { email: user.user_email, first_name: user.first_name, last_name: user.last_name },
        { expiresIn: '30d' },
      );
      expect(result).toEqual({ jwt: token });
    });
  });

  describe('parseLoginRequestState', () => {
    it('should parse state with param ssr=false', () => {
      const state = 'ssr=false';
      const result = authService.parseLoginRequestState(state);
      expect(result).toEqual({ ssr: 'false' });
    });

    it('should parse state with two params', () => {
      const state = 'ssr=true&originalUrl=http://localhost:3000';
      const result = authService.parseLoginRequestState(state);
      expect(result).toEqual({ ssr: 'true', originalUrl: 'http://localhost:3000' });
    });
  });
});
