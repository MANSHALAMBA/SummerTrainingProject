var express = require('express');

var router = express.Router();

/* GET areastovisit page. */
router.get('/', function(req, res, next) {
  res.render('cs', { title: 'CSE' });
});

module.exports = router;
