"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeComparisonModel = exports.Comparison = void 0;
const sequelize_1 = require("sequelize");
class Comparison extends sequelize_1.Model {
    static associate(models) {
        Comparison.belongsTo(models.User, { foreignKey: "user_id" });
        Comparison.belongsTo(models.Product, { foreignKey: "product_id1" });
        Comparison.belongsTo(models.Product, { foreignKey: "product_id2" });
    }
}
exports.Comparison = Comparison;
const initializeComparisonModel = (sequelize) => {
    Comparison.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        product_id1: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        product_id2: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Comparison",
        tableName: "comparisons",
        timestamps: true,
    });
};
exports.initializeComparisonModel = initializeComparisonModel;
