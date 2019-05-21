var express = require('express');

var router = express.Router();

/* GET winner page. */
router.get('/', function(req, res, next) {
  res.render('winners', { title: 'winners' });
});

module.exports = router;
