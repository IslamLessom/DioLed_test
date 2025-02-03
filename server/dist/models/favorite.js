"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeFavoriteModel = exports.Favorite = void 0;
const sequelize_1 = require("sequelize");
class Favorite extends sequelize_1.Model {
    static associate(models) {
        Favorite.belongsTo(models.User, { foreignKey: "user_id" });
        Favorite.belongsTo(models.Product, { foreignKey: "product_id" });
    }
}
exports.Favorite = Favorite;
const initializeFavoriteModel = (sequelize) => {
    Favorite.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Favorite",
        tableName: "favorites",
        timestamps: true,
    });
};
exports.initializeFavoriteModel = initializeFavoriteModel;
