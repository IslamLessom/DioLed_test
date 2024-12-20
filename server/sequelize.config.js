require("ts-node/register");
require("tsconfig-paths/register");

const config = require("./src/config/config.ts").default;
module.exports = config;
