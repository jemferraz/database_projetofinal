const connection = require('../database/database');
const { DataTypes } = require('sequelize');

const Category = require('./Category');
const Author = require('./Author');

const Post = connection.define('post', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  subtitle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  publishDate: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    allowNull: false,  
  },
  categoryId: {
      type: DataTypes.INTEGER,
      allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
    freezeTableName: true,
    tableName: 'post'
})

Post.belongsTo(Category, {foreignKey: 'categoryId'});
Category.hasMany(Post, {foreignKey: 'categoryId'});

Post.belongsTo(Author, {foreignKey: 'authorId'});
Author.hasMany(Post, {foreignKey: 'authorId'});

Post.sync({ alter: true });

module.exports = Post;