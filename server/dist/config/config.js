"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config = {
    development: {
        username: process.env.DB_USERNAME || "ruslanmakiev",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "dioled",
        host: process.env.DB_HOST || "db",
        dialect: "postgres",
        define: {
            underscored: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
        migrations: {
            path: "migrations",
        },
    },
    test: {
        username: process.env.DB_USERNAME || "ruslanmakiev",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "dioled_test",
        host: process.env.DB_HOST || "db",
        dialect: "postgres",
        define: {
            underscored: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
    production: {
        username: process.env.DB_USERNAME || "ruslanmakiev",
        password: process.env.DB_PASSWORD || "",
        database: process.env.DB_NAME || "dioled",
        host: process.env.DB_HOST || "db",
        dialect: "postgres",
        define: {
            underscored: true,
            timestamps: true,
            createdAt: "created_at",
            updatedAt: "updated_at",
        },
    },
};
const env = process.env.NODE_ENV || "development";
const dbConfig = config[env];
const sequelize = new sequelize_1.Sequelize({
    database: dbConfig.database,
    username: dbConfig.username,
    password: dbConfig.password,
    host: dbConfig.host,
    dialect: dbConfig.dialect,
    define: dbConfig.define,
});
exports.sequelize = sequelize;
exports.default = config;
