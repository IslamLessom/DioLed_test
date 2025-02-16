"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeOrderModel = exports.Order = void 0;
const sequelize_1 = require("sequelize");
class Order extends sequelize_1.Model {
    static associate(models) {
        Order.belongsTo(models.User, { foreignKey: "user_id" });
        Order.hasMany(models.OrderItem, { foreignKey: "order_id" });
    }
}
exports.Order = Order;
const initializeOrderModel = (sequelize) => {
    Order.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: sequelize_1.DataTypes.INTEGER,
            allowNull: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        firstname: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        comments: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
        total_sum: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM("pending", "completed", "cancelled"),
            defaultValue: "pending",
        },
    }, {
        sequelize,
        modelName: "Order",
        tableName: "orders",
        timestamps: true,
    });
};
exports.initializeOrderModel = initializeOrderModel;
