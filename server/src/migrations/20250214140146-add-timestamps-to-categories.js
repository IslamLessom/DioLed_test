"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable("categories");

    if (!tableDescription.created_at) {
      await queryInterface.addColumn("categories", "created_at", {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
    }

    if (!tableDescription.updated_at) {
      await queryInterface.addColumn("categories", "updated_at", {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
      });
    }
  },

  down: async (queryInterface, Sequelize) => {
    const tableDescription = await queryInterface.describeTable("categories");

    if (tableDescription.created_at) {
      await queryInterface.removeColumn("categories", "created_at");
    }

    if (tableDescription.updated_at) {
      await queryInterface.removeColumn("categories", "updated_at");
    }
  },
};
