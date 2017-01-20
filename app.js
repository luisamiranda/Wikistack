'use strict'
const morgan = require('morgan');
const express = require('express');
const parser = require('body-parser');
const nunjucks = require('nunjucks');

const app = express();

app.use(express.static('public'))

















var env = nunjucks.configure('views', {noCache: true});
// have res.render work with html files
app.set('view engine', 'html');
// when res.render works with html files, have it use nunjucks to do so
app.engine('html', nunjucks.render);
