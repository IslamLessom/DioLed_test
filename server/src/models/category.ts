import { Model, DataTypes, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";
import { Product } from "./product";

interface CategoryAttributes {
  id: number;
  category_name: string;
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

export class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public category_name!: string;

  static associate(models: any) {
    Category.hasMany(models.Product, { foreignKey: "category_id" });
  }
}

export const initializeCategoryModel = (sequelize: Sequelize) => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories", // Укажите имя таблицы, если оно отличается
      timestamps: true, // Укажите true или false в зависимости от ваших требований
    }
  );
};
