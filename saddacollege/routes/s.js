var express = require('express');

var router = express.Router();

/* GET aboutus page. */
router.get('/', function(req, res, next) {
  res.render('s', { title: 'SOCIETIES' });
});

module.exports = router;
