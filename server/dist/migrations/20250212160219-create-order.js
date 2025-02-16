"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
module.exports = {
    up: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        // Проверяем существующие колонки
        const tableInfo = yield queryInterface.describeTable("orders");
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
                yield queryInterface.addColumn("orders", column, {
                    type: column === "comments" ? Sequelize.TEXT : Sequelize.STRING,
                    allowNull: column === "comments",
                });
            }
        }
        // Переименовываем totalSum в total_sum, если это еще не сделано
        if (tableInfo.totalSum && !tableInfo.total_sum) {
            yield queryInterface.renameColumn("orders", "totalSum", "total_sum");
        }
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        // Проверяем существующие колонки перед откатом
        const tableInfo = yield queryInterface.describeTable("orders");
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
                yield queryInterface.removeColumn("orders", column);
            }
        }
        // Переименовываем обратно total_sum в totalSum, если необходимо
        if (tableInfo.total_sum && !tableInfo.totalSum) {
            yield queryInterface.renameColumn("orders", "total_sum", "totalSum");
        }
    }),
};
