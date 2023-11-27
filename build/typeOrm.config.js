"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("@nestjs/config");
var dotenv_1 = require("dotenv");
var typeorm_1 = require("typeorm");
var entity_1 = require("./src/entity");
(0, dotenv_1.config)();
var configService = new config_1.ConfigService();
exports.default = new typeorm_1.DataSource({
    type: 'postgres',
    host: configService.getOrThrow('POSTGRES_HOST'),
    port: configService.getOrThrow('POSTGRES_PORT'),
    database: configService.getOrThrow('POSTGRES_DATABASE'),
    username: configService.getOrThrow('POSTGRES_USER'),
    password: configService.getOrThrow('POSTGRES_PASSWORD'),
    migrations: ['migrations/**'],
    entities: [entity_1.User, entity_1.Movie],
});
//# sourceMappingURL=typeOrm.config.js.map