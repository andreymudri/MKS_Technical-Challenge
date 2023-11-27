"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var argon = __importStar(require("argon2"));
var jwt_1 = require("@nestjs/jwt");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("typeorm");
var typeorm_2 = require("@nestjs/typeorm");
var entity_1 = require("../entity");
var AuthService = (function () {
    function AuthService(userRepository, entityManager, jwt, config) {
        this.userRepository = userRepository;
        this.entityManager = entityManager;
        this.jwt = jwt;
        this.config = config;
    }
    AuthService.prototype.login = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var user, hashCheck;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, this.userRepository.findOne({
                            where: {
                                email: dto.email,
                            },
                            select: {
                                id: true,
                                hash: true,
                                email: true,
                            },
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.ForbiddenException('Invalid credentials');
                        }
                        return [4, argon.verify(user.hash, dto.password)];
                    case 2:
                        hashCheck = _a.sent();
                        if (!hashCheck) {
                            throw new common_1.ForbiddenException('Invalid credentials');
                        }
                        return [2, this.signToken(user.id, user.email)];
                }
            });
        });
    };
    AuthService.prototype.signup = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var hash, user, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 3, , 4]);
                        return [4, argon.hash(dto.password)];
                    case 1:
                        hash = _a.sent();
                        user = {
                            email: dto.email,
                            hash: hash,
                        };
                        return [4, this.entityManager
                                .createQueryBuilder()
                                .insert()
                                .into(entity_1.User)
                                .values({
                                email: dto.email,
                                hash: hash,
                            })
                                .returning('*')
                                .execute()];
                    case 2:
                        _a.sent();
                        delete user.hash;
                        return [2, { account: user }];
                    case 3:
                        error_1 = _a.sent();
                        if (error_1.code === 'P2002') {
                            throw new common_1.ForbiddenException('Credentials taken');
                        }
                        throw error_1;
                    case 4: return [2];
                }
            });
        });
    };
    AuthService.prototype.signToken = function (userId, email) {
        return __awaiter(this, void 0, void 0, function () {
            var payload, secret, token;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        payload = {
                            sub: userId,
                            email: email,
                        };
                        secret = this.config.get('JWT_SECRET');
                        return [4, this.jwt.signAsync(payload, {
                                expiresIn: '15d',
                                secret: secret,
                            })];
                    case 1:
                        token = _a.sent();
                        return [2, { access_token: token }];
                }
            });
        });
    };
    AuthService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, typeorm_2.InjectRepository)(entity_1.User)),
        __metadata("design:paramtypes", [typeorm_1.Repository,
            typeorm_1.EntityManager,
            jwt_1.JwtService,
            config_1.ConfigService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map