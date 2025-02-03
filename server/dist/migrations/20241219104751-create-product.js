// path/to/migrations/20230315000000-create-product.js
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
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            },
            product_name: {
                type: Sequelize.STRING,
                allowNull: false,
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
                type: Sequelize.ARRAY(Sequelize.STRING),
                defaultValue: [],
            },
            barcode: {
                type: Sequelize.STRING,
                allowNull: true,
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
