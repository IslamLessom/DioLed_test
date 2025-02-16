import { Model, DataTypes, Optional, Sequelize } from "sequelize";
import { Product } from "./product";

interface CategoryAttributes {
  id: number;
  category_name: string;
  created_at: Date;
  updated_at: Date;
}

interface CategoryCreationAttributes
  extends Optional<CategoryAttributes, "id"> {}

export class Category
  extends Model<CategoryAttributes, CategoryCreationAttributes>
  implements CategoryAttributes
{
  public id!: number;
  public category_name!: string;
  public created_at!: Date;
  public updated_at!: Date;

  static associate() {
    Category.hasMany(Product, { foreignKey: "category_id", as: "products" });
  }
}

export const initializeCategoryModel = (sequelize: Sequelize) => {
  Category.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false, // Категории приходят с XML с конкретными ID
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    },
    {
      sequelize,
      modelName: "Category",
      tableName: "categories",
      timestamps: false, // Если не хотите автообновление этих полей
      freezeTableName: true, // Отключаем автоизменение имени таблицы (не "categoriess")
    }
  );
};
