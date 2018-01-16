var express = require('express');
var router = express.Router();
var data = require('../api/data.json');

/**
 * Routes for templates
 */
router.get('/application-start-overview', function(req, res, next) {
  res.render('application-start-overview/index', data);
});

router.get('/contact-us', function(req, res, next) {
  res.render('contact-us/index', data);
});

router.get('/forms', function(req, res, next) {
  res.render('forms/index', data);
});

router.get('/global', function(req, res, next) {
  res.render('global/index', data);
});

router.get('/home', function(req, res, next) {
  res.render('home/index', data);
});

router.get('/installers-landing', function(req, res, next) {
  res.render('installers-landing/index', data);
});

router.get('/landing-pages', function(req, res, next) {
  res.render('landing-pages/index', data);
});

router.get('/projects-content-overview', function(req, res, next) {
  res.render('projects-content-overview/index', data);
});

router.get('/psr-landing', function(req, res, next) {
  res.render('psr-landing/index', data);
});

router.get('/ss-calculators', function(req, res, next) {
  res.render('ss-calculators/index', data);
});

router.get('/ss-content-overview', function(req, res, next) {
  res.render('ss-content-overview/index', data);
});

/**
 * Add any other routes above here
 * 
 * Below takes all paths in this router and creates an array from them
 */
const paths = {'paths': []};
router.stack.forEach(function(r, i) {
  if (r.route && r.route.path) {
    paths['paths'].push(r.route.path);
  }
})

// Index route, just to display paths
router.get('/', function(req, res, next) {
  res.render('index', paths);
});

module.exports = router;
