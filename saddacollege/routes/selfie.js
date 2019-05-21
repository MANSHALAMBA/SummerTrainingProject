var express = require('express');

var router = express.Router();

/* GET selfie page. */
router.get('/', function(req, res, next) {
  res.render('selfie', { title: 'SELFIE' });
});

module.exports = router;
