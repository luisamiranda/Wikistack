const express = require('express');
const router = express.Router();
const models = require('../models');
var Page = models.Page; 
var User = models.User; 

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/add', function(req, res, next) {
  console.log('title: ', req.body.title);
  var page = Page.build({
    title: req.body.title,
    content: req.body.content
  });
  page.save();
  res.redirect('/');
  // res.json(req.body);
});

router.get('/add', function(req, res, next){
  res.render('addpage.html')
});

module.exports = router;
