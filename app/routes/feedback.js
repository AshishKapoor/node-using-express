var express = require('express')
var router = express.Router()

router.get('/feedback', function (req, res) { // root route

  res.render('feedback', {
    pageID: 'feedback',
    pageTitle: 'Feedback'
  });

})

module.exports = router