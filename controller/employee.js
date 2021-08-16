var express = require('express');
var router = express.Router();
var emplist = require('../model/employee')

/* GET employees listing. */
router.get('/list', function(req, res, next) {
    var emps = [];
    for (var key in emplist) 
        emps.push(emplist[key].name);
    res.render('employees', {title: 'Employees', list: emps})


});


module.exports = router;
