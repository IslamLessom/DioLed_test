"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCategoryModel = exports.Category = void 0;
const sequelize_1 = require("sequelize");
const product_1 = require("./product");
class Category extends sequelize_1.Model {
    static associate() {
        Category.hasMany(product_1.Product, { foreignKey: "category_id", as: "products" });
    }
}
exports.Category = Category;
const initializeCategoryModel = (sequelize) => {
    Category.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false, // Категории приходят с XML с конкретными ID
        },
        category_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
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
        modelName: "Category",
        tableName: "categories",
        timestamps: false, // Если не хотите автообновление этих полей
        freezeTableName: true, // Отключаем автоизменение имени таблицы (не "categoriess")
    });
};
exports.initializeCategoryModel = initializeCategoryModel;
