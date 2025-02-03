"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeOrderItemModel = exports.OrderItem = void 0;
const sequelize_1 = require("sequelize");
class OrderItem extends sequelize_1.Model {
    static associate(models) {
        OrderItem.belongsTo(models.Order, { foreignKey: "order_id" });
        OrderItem.belongsTo(models.Product, { foreignKey: "product_id" });
    }
}
exports.OrderItem = OrderItem;
const initializeOrderItemModel = (sequelize) => {
    OrderItem.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        order_id: {
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
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "OrderItem",
        tableName: "order_items",
    });
};
exports.initializeOrderItemModel = initializeOrderItemModel;
