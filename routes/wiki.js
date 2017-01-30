var express = require('express');
var router = express.Router();
var Sequelize = require('sequelize');
var db = new Sequelize('postgres:localhost:5432/wikistack');

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/add', function(req, res, next) {
  res.render('addpage.html');
});

router.post('/', function(req, res, next) {
  var user = User.findOrCreate({
    name: req.body.authorName,
    email: req.body.authorEmail
  })
  .spread(function(foundOrCreatedUser, boolean) {
    return Page.create({
      title: req.body.title,
      content: req.body.content
    }) .then(function(foundOrCreatedUser, page){
    return page.getAuthor(foundOrCreatedUser)
      })
  });
  res.redirect('/');
});

module.exports = { router };
