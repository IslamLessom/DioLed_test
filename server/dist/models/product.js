"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeProductModel = exports.Product = void 0;
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
        vendor_code: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        brand: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        base_price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        announcement_image_url: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: true,
        },
        additional_images: {
            type: sequelize_1.DataTypes.ARRAY(sequelize_1.DataTypes.STRING),
            defaultValue: [],
        },
        url: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        store: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        pickup: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        delivery: {
            type: sequelize_1.DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false,
        },
        params: {
            type: sequelize_1.DataTypes.JSONB,
            allowNull: true,
            defaultValue: {},
        },
        created_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        updated_at: {
            type: sequelize_1.DataTypes.DATE,
            allowNull: false,
            defaultValue: sequelize_1.Sequelize.literal("CURRENT_TIMESTAMP"),
        },
    }, {
        sequelize,
        modelName: "Product",
        tableName: "products",
        timestamps: false,
        freezeTableName: true,
    });
    return Product;
};
exports.initializeProductModel = initializeProductModel;
