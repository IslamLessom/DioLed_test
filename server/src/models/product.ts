import { Model, DataTypes, Optional } from "sequelize";
import { Sequelize } from "sequelize/types";

interface ProductAttributes {
  id?: number; // Можно сделать необязательным
  product_name?: string; // Наименование элемента
  drawing?: string; // Чертёж
  material?: string; // Материал
  mounting_type?: string; // Тип монтажа
  type?: string; // Тип
  connection?: string; // Подключение
  luminous_flux?: string; // Световой поток
  power_consumption_per_meter?: string; // Потребляемая мощность на 1м
  luminous_flux_per_meter?: string; // Световой поток на 1м
  socket_type?: string; // Тип цоколя
  lamp_type?: string; // Тип лампы
  color_rendering?: string; // Цветопередача
  beam_angle?: string; // Угол света
  ip_rating?: string; // Степень защиты IP
  output_voltage?: string; // Выходное напряжение
  light_source?: string; // Источник света
  power?: string; // Мощность
  color?: string; // Цвет
  color_temperature?: string; // Цветовая температура
  dimming?: string; // Диммирование
  base_price?: number; // Базовая цена
  announcement_image_url?: string; // Картинка для анонса (путь)
  additional_images?: string; // Картинки [MORE_PHOTO]
  barcode?: string; // Штрихкод
}

interface ProductCreationAttributes extends Optional<ProductAttributes, "id"> {}

export class Product
  extends Model<ProductAttributes, ProductCreationAttributes>
  implements ProductAttributes
{
  public id!: number;
  public product_name!: string;
  public drawing?: string;
  public material?: string;
  public mounting_type?: string;
  public type?: string;
  public connection?: string;
  public luminous_flux?: string;
  public power_consumption_per_meter?: string;
  public luminous_flux_per_meter?: string;
  public socket_type?: string;
  public lamp_type?: string;
  public color_rendering?: string;
  public beam_angle?: string;
  public ip_rating!: string;
  public output_voltage!: string;
  public light_source!: string;
  public power!: string;
  public color!: string;
  public color_temperature!: string;
  public dimming!: string;
  public base_price!: number;
  public announcement_image_url!: string;
  public additional_images!: string;
  public barcode!: string;

  static initialize(sequelize: Sequelize) {
    Product.init(
      {
        id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: true, // Сделано необязательным
        },
        product_name: {
          type: DataTypes.STRING,
          allowNull: true, // Сделано необязательным
        },
        drawing: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        material: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        mounting_type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        connection: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        luminous_flux: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        power_consumption_per_meter: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        luminous_flux_per_meter: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        socket_type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        lamp_type: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        color_rendering: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        beam_angle: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        ip_rating: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        output_voltage: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        light_source: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        power: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        color: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        color_temperature: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        dimming: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        base_price: {
          type: DataTypes.FLOAT,
          allowNull: true,
        },
        announcement_image_url: {
          type: DataTypes.STRING,
          allowNull: true,
        },
        additional_images: {
          type: DataTypes.TEXT,
          allowNull: true,
        },
        barcode: {
          type: DataTypes.STRING,
          allowNull: true,
        },
      },
      {
        sequelize,
        modelName: "Product",
      }
    );
  }
}
