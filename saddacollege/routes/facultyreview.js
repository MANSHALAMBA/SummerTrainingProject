var express = require('express');

var router = express.Router();

/* GET facultyreview page. */
router.get('/', function(req, res, next) {
  res.render('facultyreview', { title: 'FACULTY REVIEWS' });
});

module.exports = router;
