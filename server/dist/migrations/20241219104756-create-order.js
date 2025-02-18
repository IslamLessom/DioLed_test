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
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    up(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.createTable("orders", {
                id: {
                    allowNull: false,
                    autoIncrement: true,
                    primaryKey: true,
                    type: Sequelize.INTEGER,
                },
                user_id: {
                    type: Sequelize.INTEGER,
                    allowNull: false,
                    references: {
                        model: "users",
                        key: "id",
                    },
                    onUpdate: "CASCADE",
                    onDelete: "CASCADE",
                },
                order_date: {
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                },
                status: {
                    type: Sequelize.ENUM("pending", "completed", "cancelled"),
                    defaultValue: "pending",
                },
                total_amount: {
                    type: Sequelize.FLOAT,
                    allowNull: false,
                },
                shipping_address: {
                    type: Sequelize.STRING,
                    allowNull: false,
                },
                created_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                },
                updated_at: {
                    allowNull: false,
                    type: Sequelize.DATE,
                    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
                },
            });
        });
    },
    down(queryInterface, Sequelize) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryInterface.dropTable("orders");
        });
    },
};
