'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_Channel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User_Channel.belongsTo(models.Channel, {
        foreignKey: 'channelId',
        as: 'channel'
      });
      User_Channel.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  User_Channel.init({
    userId: DataTypes.INTEGER,
    channelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'User_Channel',
  });
  return User_Channel;
};
