'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Trainer_Clients extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Trainer_Clients.belongsTo(models.User, { foreignKey: 'userId' });
      Trainer_Clients.belongsTo(models.Client, { foreignKey: 'clientId' });
    }
  }
  Trainer_Clients.init({
    userId: DataTypes.INTEGER,
    clientId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Trainer_Clients',
  });
  return Trainer_Clients;
};
