import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize/types";
import { User } from "./user";
import { Product } from "./product";

interface CartAttributes {
  id: number;
  user_id: number;
  product_id: number;
  quantity: number;
}

interface CartCreationAttributes extends Omit<CartAttributes, "id"> {}

export class Cart
  extends Model<CartAttributes, CartCreationAttributes>
  implements CartAttributes
{
  public id!: number;
  public user_id!: number;
  public product_id!: number;
  public quantity!: number;

  static associate(models: any) {
    Cart.belongsTo(models.User, { foreignKey: "user_id" });
    Cart.belongsTo(models.Product, { foreignKey: "product_id" });
  }
}

export const initializeCartModel = (sequelize: Sequelize) => {
  Cart.init(
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
      quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Cart",
      tableName: "carts",
      timestamps: true,
    }
  );
};
