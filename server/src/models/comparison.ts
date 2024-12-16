import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize/types";
import { User } from "./user";
import { Product } from "./product";

interface ComparisonAttributes {
  id: number;
  user_id: number;
  product_id1: number;
  product_id2: number;
}

interface ComparisonCreationAttributes
  extends Omit<ComparisonAttributes, "id"> {}

export class Comparison
  extends Model<ComparisonAttributes, ComparisonCreationAttributes>
  implements ComparisonAttributes
{
  public id!: number;
  public user_id!: number;
  public product_id1!: number;
  public product_id2!: number;

  static associate(models: any) {
    Comparison.belongsTo(models.User, { foreignKey: "user_id" });
    Comparison.belongsTo(models.Product, { foreignKey: "product_id1" });
    Comparison.belongsTo(models.Product, { foreignKey: "product_id2" });
  }
}

export const initializeComparisonModel = (sequelize: Sequelize) => {
  Comparison.init(
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
      product_id1: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      product_id2: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Comparison",
      tableName: "comparisons",
      timestamps: true,
    }
  );
};
