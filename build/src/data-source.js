"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("reflect-metadata");
var typeorm_1 = require("typeorm");
var entity_1 = require("./entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'postgres',
    database: 'backend_challenge',
    synchronize: true,
    logging: false,
    entities: [entity_1.User, entity_1.Movie],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map