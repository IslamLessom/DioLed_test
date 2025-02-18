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
        yield queryInterface.createTable("products", {
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
    }),
    down: (queryInterface, Sequelize) => __awaiter(void 0, void 0, void 0, function* () {
        yield queryInterface.dropTable("products");
    }),
};
