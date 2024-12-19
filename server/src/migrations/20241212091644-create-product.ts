import { QueryInterface, DataTypes, Sequelize } from "sequelize";

export const up = async (
  queryInterface: QueryInterface,
  Sequelize: Sequelize
): Promise<void> => {
  await queryInterface.createTable("Products", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    product_name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    drawing: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    material: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    mounting_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    connection: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    luminous_flux: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    power_consumption_per_meter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    luminous_flux_per_meter: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    socket_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lamp_type: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color_rendering: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beam_angle: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ip_rating: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    output_voltage: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    light_source: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    power: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    color_temperature: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    dimming: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    base_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    announcement_image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    additional_images: {
      type: DataTypes.JSONB,
      allowNull: true,
    },
    barcode: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: false,
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
  await queryInterface.dropTable("Products");
};
