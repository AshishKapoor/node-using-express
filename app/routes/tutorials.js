var express = require('express')
var router = express.Router();

router.get('/tutorials', function (req, res) { // root/speakers route
    
  res.render('tutorials', {
    pageID: 'tutorials',
    pageTitle: 'Tutorials'
  });
  
})

module.exports = router