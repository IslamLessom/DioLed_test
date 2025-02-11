import { Model, DataTypes } from "sequelize";
import { Sequelize } from "sequelize/types";

interface ApplicationFormAttributes {
  id: number;
  name: string;
  phone_number: string;
  preferred_call_time: string;
  description: string;
}

interface ApplicationFormCreationAttributes
  extends Omit<ApplicationFormAttributes, "id"> {}

export class ApplicationForm
  extends Model<ApplicationFormAttributes, ApplicationFormCreationAttributes>
  implements ApplicationFormAttributes
{
  public id!: number;
  public name!: string;
  public phone_number!: string;
  public preferred_call_time!: string;
  public description!: string;
}

export const initializeApplicationFormModel = (sequelize: Sequelize) => {
  ApplicationForm.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phone_number: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      preferred_call_time: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "ApplicationForm",
      tableName: "application_forms",
      timestamps: true,
    }
  );
};
