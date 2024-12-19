import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  username: "ruslanmakiev",
  password: "",
  database: "dioled",
  host: "127.0.0.1",
  dialect: "postgres",
  define: {
    underscored: true,
  },
});

export default sequelize;
