"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "userId" });
      this.hasMany(models.Comment, { foreignKey: "teaId" });
    }
  }
  Tea.init(
    {
      teaName: DataTypes.STRING,
      place:DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      picture: DataTypes.STRING,
      description: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tea",
    }
  );
  return Tea;
};
