var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
  res.render('index', { title: 'test' });
});

router.get('/faq', function(req, res, next) {
  res.render('faq', { title: 'faq' , list: ['how to find a product', 'how to apply for job']});
  
});

module.exports = router;
