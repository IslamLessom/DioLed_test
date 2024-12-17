import sequelize from "../config/config";
import { initializeUserModel } from "./user";
import { initializeCategoryModel } from "./category";

export const initializeModels = () => {
  initializeUserModel(sequelize);
  initializeCategoryModel(sequelize);
};
