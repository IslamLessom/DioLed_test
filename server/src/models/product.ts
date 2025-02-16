import { Model, DataTypes, Optional, Sequelize } from "sequelize";
import { Category } from "./category";

interface ProductAttributes {
  id: number;
  category_id?: number;
  product_name: string;
  vendor_code: string;
  description: string;
  brand: string;
  base_price: number;
  announcement_image_url: string;
  additional_images: string[];
  url: string;
  store: boolean;
  pickup: boolean;
  delivery: boolean;
  params: Record<string, string>;
  created_at: Date;
  updated_at: Date; // Добавляем поле
}

interface ProductCreationAttributes
  extends Optional<ProductAttributes, "id" | "created_at"> {}

export class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public category_id!: number;
  public product_name!: string;
  public vendor_code!: string;
  public description!: string;
  public brand!: string;
  public base_price!: number;
  public announcement_image_url!: string;
  public additional_images!: string[];
  public url!: string;
  public store!: boolean;
  public pickup!: boolean;
  public delivery!: boolean;
  public params!: Record<string, string>;
  public created_at!: Date; // Добавляем поле для временной метки
  public updated_at!: Date; // Добавляем поле для временной метки
}

export const initializeProductModel = (sequelize: Sequelize) => {
  Product.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: "categories",
          key: "id",
        },
      },
      product_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vendor_code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      brand: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      base_price: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
      announcement_image_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      additional_images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      url: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      store: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      pickup: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      delivery: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      params: {
        type: DataTypes.JSONB,
        allowNull: true,
        defaultValue: {},
      },
      created_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), // Устанавливаем дефолтное значение
      },
      updated_at: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"), // Устанавливаем дефолтное значение
      },
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      timestamps: false, // Можешь оставить, если не нужны другие временные метки
      freezeTableName: true,
    }
  );

  return Product;
};
