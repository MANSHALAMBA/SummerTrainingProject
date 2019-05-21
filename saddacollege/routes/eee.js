var express = require('express');

var router = express.Router();

/* GET facultyreview page. */
router.get('/', function(req, res, next) {
  res.render('eee', { title: 'EEE' });
});

module.exports = router;
