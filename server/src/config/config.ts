import { Sequelize } from "sequelize";

interface DbConfig {
  [key: string]: any;
}

const config: DbConfig = {
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
      path: "src/migrations",
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

const sequelize = new Sequelize({
  database: dbConfig.database,
  username: dbConfig.username,
  password: dbConfig.password,
  host: dbConfig.host,

  dialect: dbConfig.dialect,
  define: dbConfig.define,
});

export default config;
export { sequelize };
