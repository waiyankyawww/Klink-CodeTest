"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_config_1 = __importDefault(require("./db.config"));
const sequelize_1 = require("sequelize");
const db = new sequelize_1.Sequelize(db_config_1.default.MYSQL_DATABASE, db_config_1.default.MYSQL_USER, db_config_1.default.MYSQL_PASSWORD, {
    host: db_config_1.default.MYSQL_HOST,
    dialect: db_config_1.default.dialect,
    logging: false,
    pool: {
        max: db_config_1.default.pool.max,
        min: db_config_1.default.pool.min,
        acquire: db_config_1.default.pool.acquire,
        idle: db_config_1.default.pool.idle,
    },
});
db.authenticate().then(() => {
    console.log("Connection has been established successfully.");
});
exports.default = db;
