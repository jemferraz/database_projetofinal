const connection = require('../database/database');
const { DataTypes } = require('sequelize');

const Category = connection.define('category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
  },
}, 
{
    freezeTableName: true,
    tableName: 'category'
})

Category.sync({ alter: true });

module.exports = Category;
