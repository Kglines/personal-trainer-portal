'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MonthlyClientReportDetails extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      MonthlyClientReportDetails.belongsTo(models.MonthlyClientReport, { foreignKey: 'reportId'})
    }
  }
  MonthlyClientReportDetails.init({
    monthlyClientReportId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    clientId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    notes: {
      type: DataTypes.STRING}
  }, {
    sequelize,
    modelName: 'MonthlyClientReportDetails',
  });
  return MonthlyClientReportDetails;
};