const express = require('express');
const router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index.html');
});

router.post('/', function(req, res, next) {
  res.send('posted')
});

router.get('/add', function(req, res, next){
  res.render('addpage.html')
});

module.exports = router;
