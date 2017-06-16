var express = require('express')
var router = express.Router();

router.get('/directory', function (req, res) { 
  
  res.render('directory', {
    pageID: 'home',
    pageTitle: 'Home'
  });

})

module.exports = router