"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.initializeUserModel = void 0;
const sequelize_1 = require("sequelize");
class User extends sequelize_1.Model {
    static associate(models) {
        User.hasMany(models.Cart, { foreignKey: "user_id" });
        User.hasMany(models.Favorite, { foreignKey: "user_id" });
        User.hasMany(models.Order, { foreignKey: "user_id" });
        User.hasMany(models.Comparison, { foreignKey: "user_id" });
    }
}
exports.User = User;
const initializeUserModel = (sequelize) => {
    User.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: sequelize_1.DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: sequelize_1.DataTypes.ENUM("user", "admin"),
            defaultValue: "user",
        },
    }, {
        sequelize,
        modelName: "User",
        tableName: "users",
        underscored: true,
        timestamps: true,
    });
    return User;
};
exports.initializeUserModel = initializeUserModel;
