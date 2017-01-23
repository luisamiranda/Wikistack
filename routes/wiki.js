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

// router.post('/add', function(req, res, next) {
//   var page = Page.build({
//     title: req.body.title,
//     content: req.body.content
//   });
//   page.save();
//   //res.redirect('/');
//   res.json(req.body);
// });

router.post('/', function(req, res, next) {
  Page.create({
    title: req.body.title,
    content: req.body.content
  })
  .then(function(completed){
    // res.redirect('/wiki/');
    res.json(req.body);
  })
  .catch(console.error);
});

router.get('/:urlTitle', function (req, res, next) {
  res.send('hit dynamic route at ' + req.params.urlTitle);
  
});

module.exports = router;
