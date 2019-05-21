var express = require('express');

var router = express.Router();

/* GET contactus page. */
router.get('/', function(req, res, next) {
  res.render('contactus', { title: 'CONTACT US' });
});

module.exports = router;
