var express = require('express');
var router = express.Router();
var data = require('../api/data.json');

/* GET home page. */
router.get('/t1', function(req, res, next) {
  res.render('t1/index', data);
});

module.exports = router;
