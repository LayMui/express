var express = require('express');
var router = express.Router();
var prodlist = require('../model/products')

/* GET product listing. */
router.get('/list', function(req, res, next) {
    var pdt = [];
    for (var key in prodlist) 
        pdt.push(prodlist[key].name);
    res.render('products', {title: 'Products', list: pdt})


});


module.exports = router;
