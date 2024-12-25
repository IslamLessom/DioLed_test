import { Model, DataTypes, Optional, Sequelize } from "sequelize";

interface ProductAttributes {
  id: number;
  category_id?: number;
  product_name: string;
  drawing: string;
  material: string;
  mounting_type: string;
  type: string;
  connection: string;
  luminous_flux: string;
  power_consumption_per_meter: string;
  luminous_flux_per_meter: string;
  socket_type: string;
  lamp_type: string;
  color_rendering: string;
  beam_angle: string;
  ip_rating: string;
  output_voltage: string;
  light_source: string;
  power: string;
  color: string;
  color_temperature: string;
  dimming: string;
  base_price: number;
  announcement_image_url: string;
  additional_images: string[];
  barcode: string;
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public category_id!: number;
  public product_name!: string;
  public drawing!: string;
  public material!: string;
  public mounting_type!: string;
  public type!: string;
  public connection!: string;
  public luminous_flux!: string;
  public power_consumption_per_meter!: string;
  public luminous_flux_per_meter!: string;
  public socket_type!: string;
  public lamp_type!: string;
  public color_rendering!: string;
  public beam_angle!: string;
  public ip_rating!: string;
  public output_voltage!: string;
  public light_source!: string;
  public power!: string;
  public color!: string;
  public color_temperature!: string;
  public dimming!: string;
  public base_price!: number;
  public announcement_image_url!: string;
  public additional_images!: string[];
  public barcode!: string;
}

const initializeProductModel = (sequelize: Sequelize) => {
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
      drawing: DataTypes.STRING,
      material: DataTypes.STRING,
      mounting_type: DataTypes.STRING,
      type: DataTypes.STRING,
      connection: DataTypes.STRING,
      luminous_flux: DataTypes.STRING,
      power_consumption_per_meter: DataTypes.STRING,
      luminous_flux_per_meter: DataTypes.STRING,
      socket_type: DataTypes.STRING,
      lamp_type: DataTypes.STRING,
      color_rendering: DataTypes.STRING,
      beam_angle: DataTypes.STRING,
      ip_rating: DataTypes.STRING,
      output_voltage: DataTypes.STRING,
      light_source: DataTypes.STRING,
      power: DataTypes.STRING,
      color: DataTypes.STRING,
      color_temperature: DataTypes.STRING,
      dimming: DataTypes.STRING,
      base_price: {
        type: DataTypes.FLOAT,
        allowNull: true,
      },
      announcement_image_url: DataTypes.STRING,
      additional_images: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      barcode: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Product",
      tableName: "products",
      underscored: true,
      timestamps: true,
    }
  );

  return Product;
};

export { initializeProductModel, Product };
