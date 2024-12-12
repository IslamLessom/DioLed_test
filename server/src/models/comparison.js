"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comparison extends Model {
    static associate(models) {
      Comparison.belongsTo(models.User, { foreignKey: "user_id" });
      Comparison.belongsTo(models.Product, { foreignKey: "product_id1" });
      Comparison.belongsTo(models.Product, { foreignKey: "product_id2" });
    }
  }
  Comparison.init(
    {},
    {
      sequelize,
      modelName: "Comparison",
    }
  );
  return Comparison;
};
