'use strict'
const morgan = require('morgan');
const express = require('express');
const parser = require('body-parser');
const nunjucks = require('nunjucks');
const models = require('./models');

const app = express();

app.use(express.static('public'))

app.use('/', morgan);

app.use('/', parser);

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
