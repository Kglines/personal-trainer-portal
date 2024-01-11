'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Comment.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Users' },
      onDelete: 'CASCADE',
    },
    body: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    announcementId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: { model: 'Announcements' },
      onDelete: 'CASCADE',
    }
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};
