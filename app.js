'use strict';

const morgan = require('morgan');
const express = require('express');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models/index.js');
const routes = require('./routes/wiki.js');

const app = express();

app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

app.use('/wiki', routes);

app.use(express.static('public'));

app.use('/', morgan('dev'));

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', { noCache: true });

models.User.sync({force: true})
.then(function () {
    return models.Page.sync({force: true});
})
.then(function () {
  app.listen(3000, function() {
        console.log('Server running on port 3000');
  })
})
.catch(console.error);













var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
