var express = require('express')
var router = express.Router();

router.get('/registration', function (req, res) { 
  res.render('registration', {
    pageID: 'registration',
    pageTitle: 'Registration'
  });
})

module.exports = router