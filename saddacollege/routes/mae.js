var express = require('express');

var router = express.Router();

/* GET facultyreview page. */
router.get('/', function(req, res, next) {
  res.render('mae', { title: 'MAE' });
});

module.exports = router;
