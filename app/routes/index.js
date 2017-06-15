var express = require('express')
var router = express.Router()

router.get('/', function (req, res) { // root route

  res.render('index', {
    pageID: 'home',
    pageTitle: 'Home'
  });

})

module.exports = router