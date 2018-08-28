var express = require('express');
var burrito = require('../models/burrito');
var router = express.Router();

/* GET home page. */
router.get('/burritos', (req, res, next) => {
    burrito.getBurritos(res);
});

router.post('/add', (req, res, next) => {
    let aBurrito = req.body.text;
    burrito.addBurrito(aBurrito, res);
});

router.put('/update', (req, res, next) => {
    let id = req.body.id;
    burrito.eatBurrito(id, res);
});

router.delete('/', (req, res, next) =>{
    let id = req.body.id;
    burrito.deleteBurrito(id, res);
});

module.exports = router;
