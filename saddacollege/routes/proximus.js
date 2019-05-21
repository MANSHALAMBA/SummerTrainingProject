var express = require('express');

var router = express.Router();

/* GET facultyreview page. */
router.get('/', function(req, res, next) {
  res.render('proximus', { title: 'PROXIMUS' });
});

module.exports = router;
