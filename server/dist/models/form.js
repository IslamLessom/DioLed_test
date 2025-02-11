"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeApplicationFormModel = exports.ApplicationForm = void 0;
const sequelize_1 = require("sequelize");
class ApplicationForm extends sequelize_1.Model {
}
exports.ApplicationForm = ApplicationForm;
const initializeApplicationFormModel = (sequelize) => {
    ApplicationForm.init({
        id: {
            type: sequelize_1.DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        phone_number: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        preferred_call_time: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
            allowNull: true,
        },
    }, {
        sequelize,
        modelName: "ApplicationForm",
        tableName: "application_forms",
        timestamps: true,
    });
};
exports.initializeApplicationFormModel = initializeApplicationFormModel;
