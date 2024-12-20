import { sequelize } from "../config/config";
import { initializeUserModel } from "./user";
import { initializeCategoryModel } from "./category";
import { initializeCartModel } from "./cart";
import { initializeFavoriteModel } from "./favorite";
import { initializeOrderItemModel } from "./orderItem";
import { initializeOrderModel } from "./order";
import { initializeComparisonModel } from "./comparison";
import { initializeProductModel } from "./product";

export const initializeModels = () => {
  initializeUserModel(sequelize);
  initializeCategoryModel(sequelize);
  initializeCartModel(sequelize);
  initializeFavoriteModel(sequelize);
  initializeOrderItemModel(sequelize);
  initializeOrderModel(sequelize);
  initializeComparisonModel(sequelize);
  initializeProductModel(sequelize);
};
