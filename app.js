var express = require('express');
var morgan = require('morgan');
var parser = require('body-parser');
var nunjucks = require('nunjucks');


var app = express();

app.use(morgan('dev'));
app.use(parser);
app.use(express.static(_dirname, 'public'));

app.get('/', function(req,res,next){
  res.send('index');
});

nunjucks.configure('views', {noCache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.listen(3003, function(){
  console.log('Server is listening on port 3003.');
});
