'use strict'
const morgan = require('morgan');
const express = require('express');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');
const routes = require('./routes/wiki.js');

const app = express();

app.use('/', routes);

app.use(express.static('public'));

app.use('/', morgan('dev'));

app.use('/', parser.urlencoded({ extended: true}));
app.use(parser.json());

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

models.User.sync({})
.then(function () {
    return models.Page.sync();
})
.then(function () {
  app.listen(3001, function() {
        console.log('Server running on port 3001');
  })
})
.catch(console.error);













var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
