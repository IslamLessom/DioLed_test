"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("orders", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn("orders", "user_id", {
      type: Sequelize.INTEGER,
      allowNull: false,
    });
  },
};
