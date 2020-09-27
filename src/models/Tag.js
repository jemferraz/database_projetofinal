const connection = require('../database/database');
const { DataTypes } = require('sequelize');

const Tag= connection.define('tag', {
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
    tableName: 'tag'
})

Tag.sync({ alter: true });

module.exports = Tag;