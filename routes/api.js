var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/uneaten', function(req, res, next) {
    res.send('All the burritos');
});

router.get('/eaten', function(req, res, next) {
    res.send('All the burritos');
});

router.post('/add', function(req, res, next) {
    let burrito = req.body;
});

module.exports = router;
