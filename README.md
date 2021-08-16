# To start express web app
Run npm run start

Open localhost:8000 to see the express up and running

# request API
1. routes/users.js Add the following code snippets:
```
router.get('/:id', function(req, res) {
  res.send('user id is:' + req.params.id);
});
```
Go over to localhost:8000
localhost:8000/users/1

# Use MVC pattern
Create employees, products etc

# Install 3rd-party middleware
npm i serve-favicon

at app.js:
```
var favicon = require('serve-favicon');

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
```

# install express-validator
npm i express-validator

# Use req.param to access the params
```
app.get('/api/users/:id/:loc', function(req, res, next){
  var user_id = req.params.id;
  var loc = req.params.loc;
  console.log(req.params);
  res.send('User ID: ' + user_id + ' Location: ' + loc)
})
```
http://localhost:3000/api/users/laymui/singapore