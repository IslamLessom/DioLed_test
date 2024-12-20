import { Model, DataTypes, Optional, Sequelize } from "sequelize";

interface UserAttributes {
  id: number;
  username: string;
  email: string;
  password: string;
  role?: "user" | "admin";
}

interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

class User
  extends Model<UserAttributes, UserCreationAttributes>
  implements UserAttributes
{
  public id!: number;
  public username!: string;
  public email!: string;
  public password!: string;
  public role?: "user" | "admin";

  static associate(models: any) {
    User.hasMany(models.Cart, { foreignKey: "user_id" });
    User.hasMany(models.Favorite, { foreignKey: "user_id" });
    User.hasMany(models.Order, { foreignKey: "user_id" });
    User.hasMany(models.Comparison, { foreignKey: "user_id" });
  }
}

const initializeUserModel = (sequelize: Sequelize) => {
  User.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      role: {
        type: DataTypes.ENUM("user", "admin"),
        defaultValue: "user",
      },
    },
    {
      sequelize,
      modelName: "User",
      tableName: "users",
      underscored: true,
      timestamps: true,
    }
  );

  return User;
};

export { initializeUserModel, User };
