"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Favorite extends Model {
    static associate(models) {
      Favorite.belongsTo(models.User, { foreignKey: "user_id" });
      Favorite.belongsTo(models.Product, { foreignKey: "product_id" });
    }
  }
  Favorite.init(
    {},
    {
      sequelize,
      modelName: "Favorite",
    }
  );
  return Favorite;
};
