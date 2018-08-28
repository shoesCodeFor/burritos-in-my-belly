const db = require('../config/orm');

const Burrito = {
    addBurrito:  db.insertOne,
    eatBurrito: db.updateOne,
    getBurritos:  db.selectAll,
    deleteBurrito: db.deleteOne
};

module.exports = Burrito;
