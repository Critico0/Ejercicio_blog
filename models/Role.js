const { Model, DataTypes } = require("sequelize");

class Roles extends Model {
  static initModel(sequelize) {
    Roles.init(
      {
        rolcode: {
          type: DataTypes.BIGINT,
        },
        rolname: {
          type: DataTypes.STRING(100),
        },
      },
      {
        sequelize,
        modelName: "roles",
      },
    );
    return Roles;
  }
}

module.exports = Roles;
