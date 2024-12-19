import { QueryInterface, DataTypes, Sequelize } from "sequelize";

export const up = async (
  queryInterface: QueryInterface,
  Sequelize: Sequelize
): Promise<void> => {
  await queryInterface.createTable("Favorites", {
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
  await queryInterface.dropTable("Favorites");
};
