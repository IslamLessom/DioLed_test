import { Model, DataTypes, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";

interface OrderAttributes {
  id: number;
  user_id: number; // Добавьте это поле
  username: string;
  firstname: string;
  phone: string;
  address: string;
  comments: string;
  total_sum: number;
  status: "pending" | "completed" | "cancelled";
}

interface OrderCreationAttributes extends Optional<OrderAttributes, "id"> {}

export class Order
  extends Model<OrderAttributes, OrderCreationAttributes>
  implements OrderAttributes
{
  public id!: number;
  public user_id!: number; // Добавьте это поле
  public username!: string;
  public firstname!: string;
  public phone!: string;
  public address!: string;
  public comments!: string;
  public total_sum!: number;
  public status!: "pending" | "completed" | "cancelled";
  public created_at!: Date;
  public updated_at!: Date;

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
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      comments: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      total_sum: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "cancelled"),
        defaultValue: "pending",
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
