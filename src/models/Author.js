const connection = require('../database/database');
const { DataTypes } = require('sequelize');

const Author = connection.define('author', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  }
},
{
    freezeTableName: true,
    tableName: 'author'
})

Author.sync({ alter: true });

module.exports = Author;