const express = require('express');
const bodyParser = require('body-parser');
const slugify = require('slugify');

const Post= require('./models/Post');
const Category = require('./models/Category');
const Author = require('./models/Author');
const Tag = require('./models/Tag');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

/*Basic routing to fill database */

/* Route : Add category */
app.post('/category/add', (req, res) => {
  //Get data from body
  const {name, description} = req.body;

  Category.create({
    name: name,
    description: description
  }).then(() => {
    res.status(200).json({status: 'ok'})
  }).catch((error) => {
    res.status(500).json({error: error})
  })
});

/* Route : Add tag */
app.post('/tag/add', (req, res) => {
  //Get data from body
  const {name, description} = req.body;

  Tag.create({
    name: name,
    description: description
  }).then(() => {
    res.status(200).json({status: 'ok'})
  }).catch((error) => {
    res.status(500).json({error: error})
  })
});

/* Route : Add author */
app.post('/author/add', (req, res) => {
  //Get data from body
  const {name, email, phone} = req.body;

  Author.create({
    name: name,
    email: email,
    phone: phone
  }).then(() => {
    res.status(200).json({status: 'ok'})
  }).catch((error) => {
    res.status(500).json({error: error})
  })
});


/* ROTA 1: Obter dados de todos os posts */
app.get('/blog', (req, res) => {

  Post.findAll({
    include: [{ all: true }]
  }).then((posts) => {
    res.json({posts: posts})
  }).catch((error) => {
    res.status(500).json({status: `Error: ${error}.`})
  })
});


/*ROTA 2: Obter dados de um post específico */
app.get('/blog/:slug', (req, res) => {
  const slug = req.params.slug;

  Post.findOne({
    where: { slug: slug }
  }).then((posts) => {
    res.json({posts: posts})
  }).catch((error) => {
    res.status(500).json({status: `Error getting slug ${error}: ${error}.`})
  })
});


/*ROTA 3: Adicionar um post */
app.post('/blog/add', (req, res) => {
  const {title, subtitle, content, authorName, categoryName} = req.body;

  //First identify ids for category and author. Then, create post.
  Category.findOne({
    where: { name: categoryName }
  }).then(categoryObj => {
    let categoryId = categoryObj.dataValues.id;

    Author.findOne({
      where: { name: authorName }
    }).then(authorObj => {
      let authorId = authorObj.dataValues.id;

      Post.create({
        title: title,
        subtitle: subtitle,
        content: content,
        categoryId: categoryId,
        authorId: authorId,
        slug: slugify(title),
        publishDate: new Date()
      }).then(() => {
        res.json({status: 'ok'})
      }).catch((error) => {
        res.status(500).json({ status: `Error creating Post: ${error}.` })
      });

    }).catch(error => {
      res.status(500).json({ status: `Error finding Author: ${error}` });
    });

  }).catch(error =>{
    res.status(500).json({ status: `Error finding Category: ${error}` });
  });

});


/* ROTA 4: Alterar os dados de um post */
app.post('/blog/edit', (req, res) => {

  //We will assume here that all fields were given...
  const {id, title, subtitle, content, authorName, categoryName} = req.body;

  //First identify ids for category and author. Then, edit post.
  Category.findOne({
    where: { name: categoryName }
  }).then(categoryObj => {
    let categoryId = categoryObj.dataValues.id;

    Author.findOne({
      where: { name: authorName }
    }).then(authorObj => {
      let authorId = authorObj.dataValues.id;

      Post.update({
        title: title,
        subtitle: subtitle,
        content: content,
        categoryId: categoryId,
        authorId: authorId,
        slug: slugify(title)
      },
      { where: { id: parseInt(id) }}
      ).then(() => {
        res.json({status: 'Ok: post updated.'})
      }).catch((error) => {
        res.status(500).json({ status: `Error updating Post: ${error}` })
      });

    }).catch(error => {
      res.status(500).json({ status: `Error finding Author: ${error}` });
    });

  }).catch(error =>{
    res.status(500).json({ status: `Error finding Category: ${error}` });
  });

});

/* ROTA 5: Remover um post */
app.post('/blog/remove', (req, res) => {
  const id = req.body.id;

  Post.destroy({
    where: { id: parseInt(id) }
  }).then(() => {
    res.json({ status: `Post ${id} successfully removed` })
  }).catch((error) => {
    res.status(500).json({ status: `Error deleting post ${id}: ${error}.` })
  })
});

/* ROTA 6:  Obter todos os posts de uma categoria específica */
app.post('/blog_by_category', (req, res) => {
  const categoryId = req.body.categoryId;

  Post.findAll({
    where: {categoryId: parseInt(categoryId)},
    include: [{ all: true }]
  }).then((posts) => {
    res.json({posts: posts})
  }).catch((error) => {
    res.status(500).json({status: `Error getting category ${categoryId}: ${error}.`})
  })
});


//Start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server running on port ${port}...`);
});