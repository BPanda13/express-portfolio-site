var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Home', route: 'home' });
});

/* GET contact-me page. */
router.get('/contact-me', function (req, res, next) {
  res.render('contact-me', { title: 'Contact Me', route: 'contact-me' });
});

/* POST contact-me page. */
router.post('/contact-me', function (req, res, next) {
  if (!req.body) {
    return res.sendStatus(400);
  }
  // redirect to result page
  res.redirect('./contact-result?firstName=' + req.body.firstName + '&lastName=' + req.body.lastName + '&contactNumber=' + req.body.contactNumber + '&email=' + req.body.email + '&message=' + req.body.message);
});

/* GET contact-result page. */
router.get('/contact-result', function (req, res, next) {
  console.log(req.query)
  // return message
  res.render('contact-result', {
    title: 'Contact Me Result',
    route: 'contact-me-res',
    firstName: req.query.firstName,
    lastName: req.query.lastName,
    contactNumber: req.query.contactNumber,
    email: req.query.email,
    message: req.query.message,
  });
});

/* GET about-me page. */
router.get('/about-me', function (req, res, next) {
  res.render('about-me', { title: 'About Me', route: 'about-me' });
});

/* GET project page. */
router.get('/project', function (req, res, next) {
  res.render('project', { title: 'Project', route: 'project' });
});

/* GET service page. */
router.get('/service', function (req, res, next) {
  res.render('service', { title: 'Service', route: 'service' });
});

module.exports = router;
