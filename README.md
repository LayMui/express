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