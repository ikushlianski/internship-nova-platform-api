/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/gateway/src/auth/auth.controller.ts":
/*!**************************************************!*\
  !*** ./apps/gateway/src/auth/auth.controller.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const google_oauth_guard_1 = __webpack_require__(/*! ./guards/google-oauth.guard */ "./apps/gateway/src/auth/guards/google-oauth.guard.ts");
const express_1 = __webpack_require__(/*! express */ "express");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/gateway/src/auth/auth.service.ts");
const public_decorator_1 = __webpack_require__(/*! ./public.decorator */ "./apps/gateway/src/auth/public.decorator.ts");
const auth_types_1 = __webpack_require__(/*! ./auth.types */ "./apps/gateway/src/auth/auth.types.ts");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const environment_types_1 = __webpack_require__(/*! ../environment/environment.types */ "./apps/gateway/src/environment/environment.types.ts");
const controllerName = 'auth';
let AuthController = class AuthController {
    constructor(authService, configService) {
        this.authService = authService;
        this.configService = configService;
    }
    async googleAuthCallback(req, res, state) {
        const stateFromLoginRequest = Object.fromEntries([
            decodeURIComponent(state).split('='),
        ]);
        let token;
        try {
            token = await this.authService.generateJwtToken(req.user);
        }
        catch (err) {
            return res
                .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                .send({ success: false, message: err.message });
        }
        const frontendUrl = this.configService.get('FRONTEND_URL');
        if (stateFromLoginRequest.ssr === 'true') {
            return res.redirect(`${frontendUrl}/oauth?token=${token.jwt}`);
        }
        else {
            res.cookie('googleToken', token.jwt, {
                httpOnly: true,
                secure: true,
                path: '/',
                sameSite: 'lax',
                expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30),
                domain: this.configService.get('APP_DOMAIN'),
            });
            return res.redirect(frontendUrl);
        }
    }
    async getTestToken(res, body) {
        console.log("this.configService.get<string>('APP_ENV')", this.configService.get('APP_ENV'));
        if (this.configService.get('APP_ENV') !== environment_types_1.AppEnvironment.Prod) {
            try {
                const token = await this.authService.generateJwtToken(body);
                res.cookie('googleToken', token.jwt, {
                    httpOnly: true,
                    secure: false,
                    path: '/',
                    sameSite: 'none',
                    domain: this.configService.get('APP_DOMAIN'),
                });
                return res.send({ success: true, token: token.jwt });
            }
            catch (err) {
                return res
                    .status(common_1.HttpStatus.INTERNAL_SERVER_ERROR)
                    .send({ success: false, message: err.message });
            }
        }
        return res.status(common_1.HttpStatus.FORBIDDEN).send('Forbidden');
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, public_decorator_1.Public)(),
    (0, common_1.Get)('google/callback'),
    (0, common_1.UseGuards)(google_oauth_guard_1.GoogleOauthGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __param(2, (0, common_1.Query)('state')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object, String]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "googleAuthCallback", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Generate token' }),
    (0, swagger_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'Token generated successfully.',
    }),
    (0, swagger_1.ApiResponse)({ status: common_1.HttpStatus.FORBIDDEN, description: 'Forbidden.' }),
    (0, swagger_1.ApiBody)({ type: auth_types_1.ParsedUserData }),
    (0, public_decorator_1.Public)(),
    (0, common_1.Post)('token'),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _e : Object, typeof (_f = typeof auth_types_1.ParsedUserData !== "undefined" && auth_types_1.ParsedUserData) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], AuthController.prototype, "getTestToken", null);
exports.AuthController = AuthController = __decorate([
    (0, swagger_1.ApiTags)(controllerName),
    (0, common_1.Controller)(controllerName),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], AuthController);


/***/ }),

/***/ "./apps/gateway/src/auth/auth.module.ts":
/*!**********************************************!*\
  !*** ./apps/gateway/src/auth/auth.module.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/gateway/src/auth/auth.service.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/gateway/src/auth/auth.controller.ts");
const google_oauth_strategy_1 = __webpack_require__(/*! ./guards/google-oauth.strategy */ "./apps/gateway/src/auth/guards/google-oauth.strategy.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_auth_strategy_1 = __webpack_require__(/*! ./guards/jwt-auth.strategy */ "./apps/gateway/src/auth/guards/jwt-auth.strategy.ts");
const jwt_auth_guard_1 = __webpack_require__(/*! ./guards/jwt-auth.guard */ "./apps/gateway/src/auth/guards/jwt-auth.guard.ts");
const environment_service_1 = __webpack_require__(/*! ../environment/environment.service */ "./apps/gateway/src/environment/environment.service.ts");
const service_names_1 = __webpack_require__(/*! ../service-names */ "./apps/gateway/src/service-names.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let AuthModule = class AuthModule {
};
exports.AuthModule = AuthModule;
exports.AuthModule = AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            jwt_1.JwtModule.registerAsync({
                useFactory: () => ({
                    secret: process.env.JWT_SECRET,
                    signOptions: {
                        expiresIn: '3d',
                    },
                    global: true,
                }),
            }),
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development.local', '.env.development', '.env'],
            }),
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [
            auth_service_1.AuthService,
            jwt_auth_strategy_1.JwtGuardStrategy,
            jwt_auth_guard_1.JwtGuard,
            google_oauth_strategy_1.GoogleStrategy,
            environment_service_1.EnvironmentService,
            {
                provide: service_names_1.SERVICE_NAMES.USERS_SERVICE,
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('USERS_SERVICE_HOST'),
                            port: configService.get('USERS_SERVICE_PORT'),
                        },
                    });
                },
            },
        ],
    })
], AuthModule);


/***/ }),

/***/ "./apps/gateway/src/auth/auth.service.ts":
/*!***********************************************!*\
  !*** ./apps/gateway/src/auth/auth.service.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const service_names_1 = __webpack_require__(/*! ../service-names */ "./apps/gateway/src/service-names.ts");
let AuthService = class AuthService {
    constructor(client, jwtService) {
        this.client = client;
        this.jwtService = jwtService;
    }
    async findOrCreateUser(userDto) {
        const user = await this.client
            .send({ cmd: 'find_or_create_user' }, userDto)
            .toPromise();
        return user;
    }
    async generateJwtToken(user) {
        const payload = {
            email: user.user_email,
            first_name: user.first_name,
            last_name: user.last_name,
        };
        const jwt = this.jwtService.sign(payload, { expiresIn: '30d' });
        return { jwt };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(service_names_1.SERVICE_NAMES.USERS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object])
], AuthService);


/***/ }),

/***/ "./apps/gateway/src/auth/auth.types.ts":
/*!*********************************************!*\
  !*** ./apps/gateway/src/auth/auth.types.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParsedUserData = exports.AuthResponse = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class AuthResponse {
}
exports.AuthResponse = AuthResponse;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", Boolean)
], AuthResponse.prototype, "success", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], AuthResponse.prototype, "token", void 0);
class ParsedUserData {
}
exports.ParsedUserData = ParsedUserData;
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ParsedUserData.prototype, "first_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ParsedUserData.prototype, "last_name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], ParsedUserData.prototype, "user_email", void 0);


/***/ }),

/***/ "./apps/gateway/src/auth/guards/google-oauth.guard.ts":
/*!************************************************************!*\
  !*** ./apps/gateway/src/auth/guards/google-oauth.guard.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleOauthGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let GoogleOauthGuard = class GoogleOauthGuard extends (0, passport_1.AuthGuard)('google') {
    getAuthenticateOptions(context) {
        const request = this.getRequest(context);
        return {
            state: encodeURIComponent(`ssr=${request.query.ssr}`),
        };
    }
};
exports.GoogleOauthGuard = GoogleOauthGuard;
exports.GoogleOauthGuard = GoogleOauthGuard = __decorate([
    (0, common_1.Injectable)()
], GoogleOauthGuard);


/***/ }),

/***/ "./apps/gateway/src/auth/guards/google-oauth.strategy.ts":
/*!***************************************************************!*\
  !*** ./apps/gateway/src/auth/guards/google-oauth.strategy.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const dotenv_1 = __webpack_require__(/*! dotenv */ "dotenv");
const passport_google_oauth2_1 = __webpack_require__(/*! passport-google-oauth2 */ "passport-google-oauth2");
const auth_service_1 = __webpack_require__(/*! ../auth.service */ "./apps/gateway/src/auth/auth.service.ts");
(0, dotenv_1.configDotenv)();
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth2_1.Strategy, 'google') {
    constructor(authService) {
        super({
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: process.env.GOOGLE_CALLBACK_URL,
            scope: ['profile', 'email'],
        });
        this.authService = authService;
    }
    async validate(_accessToken, _refreshToken, profile, done) {
        const { name, emails } = profile;
        const user = await this.authService.findOrCreateUser({
            user_email: emails[0].value,
            first_name: name.givenName,
            last_name: name.familyName,
        });
        return done(null, user);
    }
};
exports.GoogleStrategy = GoogleStrategy;
exports.GoogleStrategy = GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], GoogleStrategy);


/***/ }),

/***/ "./apps/gateway/src/auth/guards/jwt-auth.guard.ts":
/*!********************************************************!*\
  !*** ./apps/gateway/src/auth/guards/jwt-auth.guard.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuard = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const public_decorator_1 = __webpack_require__(/*! ../public.decorator */ "./apps/gateway/src/auth/public.decorator.ts");
let JwtGuard = class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor(reflector) {
        super();
        this.reflector = reflector;
    }
    canActivate(context) {
        const isPublic = this.reflector.getAllAndOverride(public_decorator_1.IS_PUBLIC_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);
        if (isPublic) {
            return true;
        }
        return super.canActivate(context);
    }
};
exports.JwtGuard = JwtGuard;
exports.JwtGuard = JwtGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.Reflector !== "undefined" && core_1.Reflector) === "function" ? _a : Object])
], JwtGuard);


/***/ }),

/***/ "./apps/gateway/src/auth/guards/jwt-auth.strategy.ts":
/*!***********************************************************!*\
  !*** ./apps/gateway/src/auth/guards/jwt-auth.strategy.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var JwtGuardStrategy_1;
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuardStrategy = void 0;
const express_1 = __webpack_require__(/*! express */ "express");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
let JwtGuardStrategy = JwtGuardStrategy_1 = class JwtGuardStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy) {
    constructor() {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromExtractors([
                JwtGuardStrategy_1.extractJWT,
                passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ]),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET,
        });
    }
    async validate(payload) {
        console.log('JWT validate fn: payload', payload);
        return payload;
    }
    static extractJWT(req) {
        if (req.cookies && 'googleToken' in req.cookies) {
            return req.cookies.googleToken;
        }
        return null;
    }
};
exports.JwtGuardStrategy = JwtGuardStrategy;
__decorate([
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof express_1.Request !== "undefined" && express_1.Request) === "function" ? _a : Object]),
    __metadata("design:returntype", String)
], JwtGuardStrategy, "extractJWT", null);
exports.JwtGuardStrategy = JwtGuardStrategy = JwtGuardStrategy_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], JwtGuardStrategy);


/***/ }),

/***/ "./apps/gateway/src/auth/public.decorator.ts":
/*!***************************************************!*\
  !*** ./apps/gateway/src/auth/public.decorator.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Public = exports.IS_PUBLIC_KEY = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.IS_PUBLIC_KEY = 'isPublic';
const Public = () => (0, common_1.SetMetadata)(exports.IS_PUBLIC_KEY, true);
exports.Public = Public;


/***/ }),

/***/ "./apps/gateway/src/environment/environment.service.ts":
/*!*************************************************************!*\
  !*** ./apps/gateway/src/environment/environment.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvironmentService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const environment_types_1 = __webpack_require__(/*! ./environment.types */ "./apps/gateway/src/environment/environment.types.ts");
const fs = __webpack_require__(/*! fs */ "fs");
let EnvironmentService = class EnvironmentService {
    constructor(configService) {
        this.configService = configService;
    }
    isDevelopment(appEnv) {
        const environment = appEnv || this.configService.get('APP_ENV');
        const hasDevEnvFile = fs.existsSync('.env.development.local');
        return environment === environment_types_1.AppEnvironment.Dev || hasDevEnvFile;
    }
};
exports.EnvironmentService = EnvironmentService;
exports.EnvironmentService = EnvironmentService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], EnvironmentService);


/***/ }),

/***/ "./apps/gateway/src/environment/environment.types.ts":
/*!***********************************************************!*\
  !*** ./apps/gateway/src/environment/environment.types.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppEnvironment = void 0;
var AppEnvironment;
(function (AppEnvironment) {
    AppEnvironment["Dev"] = "dev";
    AppEnvironment["QA1"] = "qa1";
    AppEnvironment["QA2"] = "qa2";
    AppEnvironment["QA3"] = "qa3";
    AppEnvironment["QA4"] = "qa4";
    AppEnvironment["Prod"] = "prod";
})(AppEnvironment || (exports.AppEnvironment = AppEnvironment = {}));


/***/ }),

/***/ "./apps/gateway/src/gateway-users.controller.ts":
/*!******************************************************!*\
  !*** ./apps/gateway/src/gateway-users.controller.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersRoutesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const service_names_1 = __webpack_require__(/*! ./service-names */ "./apps/gateway/src/service-names.ts");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let UsersRoutesController = class UsersRoutesController {
    constructor(client) {
        this.client = client;
    }
    getUserByID(id) {
        return this.client.send({ cmd: 'get_user' }, id);
    }
};
exports.UsersRoutesController = UsersRoutesController;
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersRoutesController.prototype, "getUserByID", null);
exports.UsersRoutesController = UsersRoutesController = __decorate([
    (0, common_1.Controller)('users'),
    __param(0, (0, common_1.Inject)(service_names_1.SERVICE_NAMES.USERS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UsersRoutesController);


/***/ }),

/***/ "./apps/gateway/src/gateway.module.ts":
/*!********************************************!*\
  !*** ./apps/gateway/src/gateway.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const service_names_1 = __webpack_require__(/*! ./service-names */ "./apps/gateway/src/service-names.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/gateway/src/auth/auth.module.ts");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const jwt_auth_guard_1 = __webpack_require__(/*! ./auth/guards/jwt-auth.guard */ "./apps/gateway/src/auth/guards/jwt-auth.guard.ts");
const gateway_users_controller_1 = __webpack_require__(/*! ./gateway-users.controller */ "./apps/gateway/src/gateway-users.controller.ts");
let GatewayModule = class GatewayModule {
};
exports.GatewayModule = GatewayModule;
exports.GatewayModule = GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: ['.env.development.local', '.env.development', '.env'],
            }),
            auth_module_1.AuthModule,
        ],
        controllers: [gateway_users_controller_1.UsersRoutesController],
        providers: [
            {
                provide: core_1.APP_GUARD,
                useClass: jwt_auth_guard_1.JwtGuard,
            },
            {
                provide: service_names_1.SERVICE_NAMES.USERS_SERVICE,
                inject: [config_1.ConfigService],
                useFactory: (configService) => {
                    return microservices_1.ClientProxyFactory.create({
                        transport: microservices_1.Transport.TCP,
                        options: {
                            host: configService.get('USERS_SERVICE_HOST'),
                            port: configService.get('USERS_SERVICE_PORT'),
                        },
                    });
                },
            },
        ],
    })
], GatewayModule);


/***/ }),

/***/ "./apps/gateway/src/service-names.ts":
/*!*******************************************!*\
  !*** ./apps/gateway/src/service-names.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SERVICE_NAMES = void 0;
exports.SERVICE_NAMES = {
    USERS_SERVICE: 'USERS_SERVICE',
};


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "passport-google-oauth2":
/*!*****************************************!*\
  !*** external "passport-google-oauth2" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth2");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!**********************************!*\
  !*** ./apps/gateway/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cookieParser = __webpack_require__(/*! cookie-parser */ "cookie-parser");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const gateway_module_1 = __webpack_require__(/*! ./gateway.module */ "./apps/gateway/src/gateway.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(gateway_module_1.GatewayModule);
    const gatewayPort = app.get(config_1.ConfigService).get('GATEWAY_PORT');
    app.setGlobalPrefix('api/v1');
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Nova Platform API')
        .setDescription('API powering the ecosystem of Nova educational platform')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(gatewayPort);
}
bootstrap();

})();

/******/ })()
;