import { Model, DataTypes, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";
import { Category } from "./category";
import { Favorite } from "./favorite";
import { Cart } from "./cart";
import { OrderItem } from "./orderItem";
import { Comparison } from "./comparison";

interface ProductAttributes {
  id: number;
  product_name: string;
  description?: string;
  price: number;
  stock_quantity: number;
  image_url?: string;
  category_id: number;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

export class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public product_name!: string;
  public description?: string;
  public price!: number;
  public stock_quantity!: number;
  public image_url?: string;
  public category_id!: number;

  static associate(models: any) {
    Product.belongsTo(models.Category, { foreignKey: "category_id" });
    Product.hasMany(models.Favorite, { foreignKey: "product_id" });
    Product.hasMany(models.Cart, { foreignKey: "product_id" });
    Product.hasMany(models.OrderItem, { foreignKey: "product_id" });
    Product.hasMany(models.Comparison, { foreignKey: "product_id1" });
    Product.hasMany(models.Comparison, { foreignKey: "product_id2" });
  }
}

export const initializeProductModel = (sequelize: Sequelize) => {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
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
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      timestamps: true,
    }
  );
};
