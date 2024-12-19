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
    },
  },
};

export default config;
