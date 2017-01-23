const express = require('express');
const router = express.Router();
const models = require('../models');
var Page = models.Page;
// var User = models.User;

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.get('/add', function(req, res, next){
  res.render('addpage.html');
});

router.post('/', function(req, res, next) {
  //console.log('body: ', req.body);
  Page.create({
    title: req.body.title,
    content: req.body.content
  })
  .then(function(completed){
    res.redirect('/wiki/');
  })
  .catch(console.error);
});

module.exports = router;
