"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCategoryModel = exports.Category = void 0;
const sequelize_1 = require("sequelize");
class Category extends sequelize_1.Model {
    static associate(models) {
        Category.hasMany(models.Product, { foreignKey: "category_id" });
    }
}
exports.Category = Category;
const initializeCategoryModel = (sequelize) => {
    Category.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        category_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Category",
        tableName: "categories", // Укажите имя таблицы, если оно отличается
        timestamps: true, // Укажите true или false в зависимости от ваших требований
    });
};
exports.initializeCategoryModel = initializeCategoryModel;
