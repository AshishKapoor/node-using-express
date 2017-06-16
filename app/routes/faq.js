var express = require('express')
var router = express.Router();

router.get('/faq', function (req, res) { 
   res.render('faq', {
    pageID: 'faq',
    pageTitle: 'FAQ'
  });
})

module.exports = router