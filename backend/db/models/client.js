'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Client.belongsTo(models.User, { foreignKey: 'userId' });
    }
  }
  Client.init(
    {
      userId: {
        type: DataTypes.INTEGER,
        references: { model: 'Users' },
        onDelete: 'CASCADE',
      },
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isActive: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
    },
    {
      sequelize,
      modelName: 'Client',
    }
  );
  return Client;
};
