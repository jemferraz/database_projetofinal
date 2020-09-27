const connection = require('../database/database');
const { DataTypes } = require('sequelize');

const Post = require('./Post');
const Tag = require('./Tag');

const PostTag = connection.define('post_tag', {  
    postId: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
},
{
    freezeTableName: true,
    tableName: 'post_tag'
});

PostTag.belongsTo(Post, {foreignKey: 'postId'});
Post.hasMany(PostTag, {foreignKey: 'postId'});

PostTag.belongsTo(Tag, {foreignKey: 'tagId'});
Tag.hasMany(PostTag, {foreignKey: 'tagId'});

PostTag.sync({ alter: true });

module.exports = PostTag;