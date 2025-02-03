"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeCartModel = exports.Cart = void 0;
const sequelize_1 = require("sequelize");
class Cart extends sequelize_1.Model {
    static associate(models) {
        Cart.belongsTo(models.User, { foreignKey: "user_id" });
        Cart.belongsTo(models.Product, { foreignKey: "product_id" });
    }
}
exports.Cart = Cart;
const initializeCartModel = (sequelize) => {
    Cart.init({
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
        quantity: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Cart",
        tableName: "carts",
        timestamps: true,
    });
};
exports.initializeCartModel = initializeCartModel;
