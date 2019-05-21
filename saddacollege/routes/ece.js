var express = require('express');

var router = express.Router();

/* GET areastovisit page. */
router.get('/', function(req, res, next) {
  res.render('ece', { title: 'ECE' });
});

module.exports = router;
