"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Product = exports.initializeProductModel = void 0;
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.Product = Product;
const initializeProductModel = (sequelize) => {
    Product.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: "categories",
                key: "id",
            },
        },
        product_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        drawing: sequelize_1.DataTypes.STRING,
        material: sequelize_1.DataTypes.STRING,
        mounting_type: sequelize_1.DataTypes.STRING,
        type: sequelize_1.DataTypes.STRING,
        connection: sequelize_1.DataTypes.STRING,
        luminous_flux: sequelize_1.DataTypes.STRING,
        power_consumption_per_meter: sequelize_1.DataTypes.STRING,
        luminous_flux_per_meter: sequelize_1.DataTypes.STRING,
        socket_type: sequelize_1.DataTypes.STRING,
        lamp_type: sequelize_1.DataTypes.STRING,
        color_rendering: sequelize_1.DataTypes.STRING,
        beam_angle: sequelize_1.DataTypes.STRING,
        ip_rating: sequelize_1.DataTypes.STRING,
        output_voltage: sequelize_1.DataTypes.STRING,
        light_source: sequelize_1.DataTypes.STRING,
        power: sequelize_1.DataTypes.STRING,
        color: sequelize_1.DataTypes.STRING,
        color_temperature: sequelize_1.DataTypes.STRING,
        dimming: sequelize_1.DataTypes.STRING,
        base_price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: true,
        },
        announcement_image_url: sequelize_1.DataTypes.STRING,
        additional_images: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            defaultValue: [],
        },
        barcode: sequelize_1.DataTypes.STRING,
    }, {
        sequelize,
        modelName: "Product",
        tableName: "products",
        underscored: true,
        timestamps: true,
    });
    return Product;
};
exports.initializeProductModel = initializeProductModel;
