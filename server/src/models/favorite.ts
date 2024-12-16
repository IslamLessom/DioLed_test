import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize/types";
import { User } from "./user";
import { Product } from "./product";

interface FavoriteAttributes {
  id: number;
  user_id: number;
  product_id: number;
}

interface FavoriteCreationAttributes extends Omit<FavoriteAttributes, "id"> {}

export class Favorite
  extends Model<FavoriteAttributes, FavoriteCreationAttributes>
  implements FavoriteAttributes
{
  public id!: number;
  public user_id!: number;
  public product_id!: number;

  static associate(models: any) {
    Favorite.belongsTo(models.User, { foreignKey: "user_id" });
    Favorite.belongsTo(models.Product, { foreignKey: "product_id" });
  }
}

export const initializeFavoriteModel = (sequelize: Sequelize) => {
  Favorite.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Favorite",
      tableName: "favorites",
      timestamps: true,
    }
  );
};
