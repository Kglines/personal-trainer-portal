'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonthlyClientReport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MonthlyClientReport.hasMany(models.MonthlyClientReportDetails, { foreignKey: 'monthylClientReportId'})
      MonthlyClientReport.belongsTo(models.User, { foreignKey: 'UserId' })
    }
  }
  MonthlyClientReport.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    month: {
      type: DataTypes.STRING,
      allowNull: false
    },
    year: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'MonthlyClientReport',
  });
  return MonthlyClientReport;
};