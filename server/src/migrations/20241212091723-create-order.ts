import { QueryInterface, DataTypes, Sequelize } from "sequelize";

export const up = async (
  queryInterface: QueryInterface,
  Sequelize: Sequelize
): Promise<void> => {
  await queryInterface.createTable("Orders", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
    },
    productId: {
      type: DataTypes.INTEGER,
    },
    quantity: {
      type: DataTypes.INTEGER,
    },
    totalPrice: {
      type: DataTypes.FLOAT,
    },
    status: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
  });
};

export const down = async (
  queryInterface: QueryInterface,
  Sequelize: Sequelize
): Promise<void> => {
  await queryInterface.dropTable("Orders");
};
