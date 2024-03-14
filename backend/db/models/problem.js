'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Problem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Problem.belongsTo(models.Machine, { foreignKey: 'machineId' });
    }
  }
  Problem.init({
    machineId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Machine'}
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'User'}
    },
    description: {
      type: DataTypes.STRING(250),
      allowNull: false
    },
    isRepaired: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    },
    repairedOn: {
      type: DataTypes.DATE,
    }
  }, {
    sequelize,
    modelName: 'Problem',
  });
  return Problem;
};
