"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    static associate(models) {
      Product.belongsTo(models.Category, { foreignKey: "category_id" });
      Product.hasMany(models.Favorite, { foreignKey: "product_id" });
      Product.hasMany(models.Cart, { foreignKey: "product_id" });
      Product.hasMany(models.OrderItem, { foreignKey: "product_id" });
      Product.hasMany(models.Comparison, { foreignKey: "product_id1" });
      Product.hasMany(models.Comparison, { foreignKey: "product_id2" });
    }
  }
  Product.init(
    {
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "Categories",
          key: "category_id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
    }
  );
  return Product;
};
