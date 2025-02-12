"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Проверяем существующие колонки
    const tableInfo = await queryInterface.describeTable("orders");
    console.log("Current table structure:", tableInfo);

    // Добавляем новые колонки, только если их еще нет
    const columnsToAdd = [
      "username",
      "firstname",
      "phone",
      "address",
      "comments",
    ];
    for (const column of columnsToAdd) {
      if (!tableInfo[column]) {
        await queryInterface.addColumn("orders", column, {
          type: column === "comments" ? Sequelize.TEXT : Sequelize.STRING,
          allowNull: column === "comments",
        });
      }
    }

    // Переименовываем totalSum в total_sum, если это еще не сделано
    if (tableInfo.totalSum && !tableInfo.total_sum) {
      await queryInterface.renameColumn("orders", "totalSum", "total_sum");
    }
  },

  down: async (queryInterface, Sequelize) => {
    // Проверяем существующие колонки перед откатом
    const tableInfo = await queryInterface.describeTable("orders");

    // Удаляем добавленные колонки, если они существуют
    const columnsToRemove = [
      "username",
      "firstname",
      "phone",
      "address",
      "comments",
    ];
    for (const column of columnsToRemove) {
      if (tableInfo[column]) {
        await queryInterface.removeColumn("orders", column);
      }
    }

    // Переименовываем обратно total_sum в totalSum, если необходимо
    if (tableInfo.total_sum && !tableInfo.totalSum) {
      await queryInterface.renameColumn("orders", "total_sum", "totalSum");
    }
  },
};
