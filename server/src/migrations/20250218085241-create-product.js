"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("products", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: "categories",
          key: "id",
        },
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      vendor_code: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      base_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      announcement_image_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      additional_images: {
        type: Sequelize.ARRAY(Sequelize.STRING),
        defaultValue: [],
      },
      url: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      store: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      pickup: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      delivery: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      params: {
        type: Sequelize.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("products");
  },
};
