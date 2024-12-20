import { Sequelize } from "sequelize";

interface DbConfig {
  [key: string]: any;
}

const config: DbConfig = {
  development: {
    username: "ruslanmakiev",
    password: "",
    database: "dioled",
    host: "127.0.0.1",
    dialect: "postgres",
    define: {
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  test: {
    username: "ruslanmakiev",
    password: "",
    database: "dioled_test",
    host: "127.0.0.1",
    dialect: "postgres",
    define: {
      underscored: true,
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  production: {
    username: "ruslanmakiev",
    password: "",
    database: "dioled",
    host: "127.0.0.1",
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
