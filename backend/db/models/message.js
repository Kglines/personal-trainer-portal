'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Message extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Message.belongsTo(models.Channel, {
        foreignKey: 'channelId',
        as: 'channel'
      });
      Message.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user'
      });
    }
  }
  Message.init({
    body: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Message',
  });
  return Message;
};
