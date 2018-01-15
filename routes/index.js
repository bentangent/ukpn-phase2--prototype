var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/t1', function(req, res, next) {
  res.render('t1/index', { title: 'Express' });
});

module.exports = router;
