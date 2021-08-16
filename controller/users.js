var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource demo');
});

router.get('/:id', function(req, res) {
  console.log('headers sent?' + res.headersSent);
  res.send('user id is:' + req.params.id);
  console.log('headers sent?' + res.headersSent);
});

router.route('/').all(function(req, res, next) {
  next();
})
.get(function(req, res, next) {
  res.send('route method');
  console.log('route method via get')
})
.post(function(req, res, next) {
  res.send('\n Route method using post verb\n');
  console.log('route method via post')
})
module.exports = router;
