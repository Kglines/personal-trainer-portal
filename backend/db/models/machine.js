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
    number: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    manufacturer: {
      type: DataTypes.STRING,
      allowNull: false
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    machine_img: {
      type: DataTypes.STRING
    },
    dateNew: {
      type: DataTypes.DATE
    },
    mileage: {
      type: DataTypes.INTEGER
    },
    hours: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'Machine',
  });
  return Machine;
};
