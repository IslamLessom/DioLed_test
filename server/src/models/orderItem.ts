import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize/types";

export class OrderItem extends Model {
  public id!: number;
  public order_id!: number;
  public product_id!: number;
  public quantity!: number;
  public price!: number;

  static associate(models: any) {
    OrderItem.belongsTo(models.Order, { foreignKey: "order_id" });
    OrderItem.belongsTo(models.Product, { foreignKey: "product_id" });
  }
}

export const initializeOrderItemModel = (sequelize: Sequelize) => {
  OrderItem.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_id: {
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
      price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "OrderItem",
      tableName: "order_items",
    }
  );
};
