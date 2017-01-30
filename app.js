const express = require('express');
const morgan = require('morgan');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');
const User = models.User;
const Page = models.Page;
const wikiRouter = require('./routes/wiki.js');

const app = express();

app.use(morgan('dev'));

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use('/wiki/', wikiRouter.router);

app.get('/', function(req,res,next){
  res.send('index');
});

app.get('/', function(err, req, res, next) {
  console.log(err);
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
      app.listen(3000, function(){
        console.log('Server is listening on port 3000.');
      });
    })
    .catch(console.error);
