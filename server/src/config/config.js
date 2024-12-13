import { Sequelize } from "sequelize";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const sequelize = new Sequelize("dioled", "ruslanmakiev", null, {
  host: "localhost",
  dialect: "postgres",
  define: {
    underscored: true,
  },
  models: [path.join(__dirname, "../src/models")],
});

export default sequelize;
