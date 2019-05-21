var express = require('express');

var router = express.Router();

/* GET battleshipgame page. */
router.get('/', function(req, res, next) {
  res.render('battleshipgame', { title: 'BATTLESHIP GAME' });
});

module.exports = router;
