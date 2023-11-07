'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Machine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Machine.init({
    number: DataTypes.INTEGER,
    manufacturer: DataTypes.STRING,
    type: DataTypes.STRING,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    machine_img: DataTypes.STRING,
    dateNew: DataTypes.DATE,
    mileage: DataTypes.INTEGER,
    hours: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Machine',
  });
  return Machine;
};