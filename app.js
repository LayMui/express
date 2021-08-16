var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./controller/index');
var users = require('./controller/users');
var employees = require('./controller/employee');
var products = require('./controller/product');
var favicon = require('serve-favicon');
var expressValidator = require('express-validator');
var bodyParser = require('body-parser');

var app = express();

var router = express.Router();

// testing on git reflog

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
//app.set(`case sensitive routing`, true);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'google.ico'))); //does not work


app.use('/', indexRouter);
app.use('/users', users);
app.use('/employees', employees);
app.use('/products', products);

app.get('/api/users/:id/:loc', function(req, res, next){
  var user_id = req.params.id;
  var loc = req.params.loc;
  console.log(req.params);
  res.send('User ID: ' + user_id + ' Location: ' + loc)
})

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
