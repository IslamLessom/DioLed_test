import { Model, DataTypes, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";
import { User } from "./user";
import { OrderItem } from "./orderItem";

interface OrderAttributes {
  id: number;
  order_date?: Date;
  status: "pending" | "completed" | "cancelled";
  total_amount: number;
  shipping_address: string;
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

export class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: number;
  public order_date?: Date;
  public status!: "pending" | "completed" | "cancelled";
  public total_amount!: number;
  public shipping_address!: string;

  static associate(models: any) {
    Order.belongsTo(models.User, { foreignKey: "user_id" });
    Order.hasMany(models.OrderItem, { foreignKey: "order_id" });
  }
}

export const initializeOrderModel = (sequelize: Sequelize) => {
  Order.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      order_date: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending",
      },
      total_amount: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      shipping_address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Order",
      tableName: "orders",
      timestamps: true,
    }
  );
};
