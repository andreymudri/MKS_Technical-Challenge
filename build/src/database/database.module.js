"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
var common_1 = require("@nestjs/common");
var config_1 = require("@nestjs/config");
var typeorm_1 = require("@nestjs/typeorm");
var DatabaseModule = (function () {
    function DatabaseModule() {
    }
    DatabaseModule = __decorate([
        (0, common_1.Module)({
            imports: [
                typeorm_1.TypeOrmModule.forRootAsync({
                    useFactory: function (configService) { return ({
                        type: 'postgres',
                        host: configService.getOrThrow('POSTGRES_HOST'),
                        port: configService.getOrThrow('POSTGRES_PORT'),
                        database: configService.getOrThrow('POSTGRES_DATABASE'),
                        username: configService.getOrThrow('POSTGRES_USER'),
                        password: configService.getOrThrow('POSTGRES_PASSWORD'),
                        autoLoadEntities: true,
                        synchronize: configService.getOrThrow('RUN_MIGRATIONS'),
                    }); },
                    inject: [config_1.ConfigService],
                }),
            ],
        })
    ], DatabaseModule);
    return DatabaseModule;
}());
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map