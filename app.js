const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');
const User = models.User;
const Page = models.Page;


const app = express();

app.use(morgan('dev'));
app.use(parser);
app.use(express.static('_dirname', 'public'));

app.get('/', function(req,res,next){
  res.send('index');
});

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

User.sync({force: true})
  .then(function(){
    return Page.sync({force: true});
  })
  // .then(function(){
  //   const user = User.create({
  //     name: req.body.authorName,
  //     email: req.body.authorEmail
  //   })
  // })
  // .then(function(user){
  //   const page = Page.create({
  //     title: req.body.title,
  //     content: req.body.content,
  //     tags: req.body.tags
  //   })
  //   .then(function(page, user){
  //     page.getAuthor(user);
  //   })
    .then(function(){
      app.listen(3003, function(){
        console.log('Server is listening on port 3003.');
      });
    })
    .catch(console.error);
