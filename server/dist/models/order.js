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
        order_date: {
            type: sequelize_1.DataTypes.DATE,
            defaultValue: sequelize_1.DataTypes.NOW,
        },
        status: {
            type: sequelize_1.DataTypes.ENUM("pending", "completed", "cancelled"),
            defaultValue: "pending",
        },
        total_amount: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        shipping_address: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
    }, {
        sequelize,
        modelName: "Order",
        tableName: "orders",
        timestamps: true,
    });
};
exports.initializeOrderModel = initializeOrderModel;
