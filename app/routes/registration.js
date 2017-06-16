var express = require('express')
var router = express.Router();

router.get('/registration', function (req, res) { 
  res.render('registration', {
    pageID: 'home',
    pageTitle: 'Home'
  });
})

module.exports = router