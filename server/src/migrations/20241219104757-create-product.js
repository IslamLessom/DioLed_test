"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Products", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      product_name: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      drawing: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      material: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      mounting_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      connection: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      luminous_flux: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      power_consumption_per_meter: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      luminous_flux_per_meter: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      socket_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lamp_type: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      color_rendering: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      beam_angle: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      ip_rating: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      output_voltage: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      light_source: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      power: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      color: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      color_temperature: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      dimming: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      base_price: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      announcement_image_url: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      additional_images: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      barcode: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Products");
  },
};
