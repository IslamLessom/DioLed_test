import { sequelize } from "../config/config";
import { initializeUserModel, User } from "./user";
import { initializeCategoryModel, Category } from "./category";
import { initializeCartModel, Cart } from "./cart";
import { initializeFavoriteModel, Favorite } from "./favorite";
import { initializeOrderItemModel, OrderItem } from "./orderItem";
import { initializeOrderModel, Order } from "./order";
import { initializeComparisonModel, Comparison } from "./comparison";
import { initializeProductModel, Product } from "./product";

export const initializeModels = () => {
  // Инициализация моделей
  initializeUserModel(sequelize);
  initializeProductModel(sequelize);
  initializeCategoryModel(sequelize);
  initializeCartModel(sequelize);
  initializeFavoriteModel(sequelize);
  initializeOrderModel(sequelize);
  initializeOrderItemModel(sequelize);
  initializeComparisonModel(sequelize);

  // Инициализация ассоциаций
  const models = {
    User,
    Product,
    Category,
    Cart,
    Favorite,
    Order,
    OrderItem,
    Comparison,
  };

  // Вызываем associate для каждой модели
  Object.values(models).forEach((model: any) => {
    if (model.associate) {
      model.associate(models);
    }
  });
};
