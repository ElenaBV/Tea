"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "ownerId" });
      this.belongsTo(models.Tea, { foreignKey: "teaId" });
    }
  }
  Comment.init(
    {
      ownerId: DataTypes.INTEGER,
      teaId: DataTypes.INTEGER,
      commentBody: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Comment",
    },
  );
  return Comment;
};
