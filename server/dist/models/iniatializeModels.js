"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initializeModels = void 0;
const config_1 = require("../config/config");
const user_1 = require("./user");
const category_1 = require("./category");
const cart_1 = require("./cart");
const favorite_1 = require("./favorite");
const orderItem_1 = require("./orderItem");
const order_1 = require("./order");
const comparison_1 = require("./comparison");
const product_1 = require("./product");
const initializeModels = () => {
    // Инициализация моделей
    (0, user_1.initializeUserModel)(config_1.sequelize);
    (0, product_1.initializeProductModel)(config_1.sequelize);
    (0, category_1.initializeCategoryModel)(config_1.sequelize);
    (0, cart_1.initializeCartModel)(config_1.sequelize);
    (0, favorite_1.initializeFavoriteModel)(config_1.sequelize);
    (0, order_1.initializeOrderModel)(config_1.sequelize);
    (0, orderItem_1.initializeOrderItemModel)(config_1.sequelize);
    (0, comparison_1.initializeComparisonModel)(config_1.sequelize);
    // Инициализация ассоциаций
    const models = {
        User: user_1.User,
        Product: product_1.Product,
        Category: category_1.Category,
        Cart: cart_1.Cart,
        Favorite: favorite_1.Favorite,
        Order: order_1.Order,
        OrderItem: orderItem_1.OrderItem,
        Comparison: comparison_1.Comparison,
    };
    // Вызываем associate для каждой модели
    Object.values(models).forEach((model) => {
        if (model.associate) {
            model.associate(models);
        }
    });
};
exports.initializeModels = initializeModels;
