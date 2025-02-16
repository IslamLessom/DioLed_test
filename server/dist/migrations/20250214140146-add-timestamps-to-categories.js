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
        const tableDescription = yield queryInterface.describeTable("categories");
        if (!tableDescription.created_at) {
            yield queryInterface.addColumn("categories", "created_at", {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            });
        }
        if (!tableDescription.updated_at) {
            yield queryInterface.addColumn("categories", "updated_at", {
                type: Sequelize.DATE,
                allowNull: false,
                defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
            });
        }
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        const tableDescription = yield queryInterface.describeTable("categories");
        if (tableDescription.created_at) {
            yield queryInterface.removeColumn("categories", "created_at");
        }
        if (tableDescription.updated_at) {
            yield queryInterface.removeColumn("categories", "updated_at");
        }
    }),
};
