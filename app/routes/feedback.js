var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var feedbackData = require('../data/feedback.json')
var fs = require('fs')

router.get('/feedback', function (req, res) { // root route

  res.render('feedback', {
    pageID: 'feedback',
    pageTitle: 'Feedback'
  });

})


router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))

router.post('/api', function(req, res) {
  
  feedbackData.unshift(req.body);
  fs.writeFile('app/data/feedback.json', JSON.stringify(feedbackData), 'utf8', function(err) {
    console.log(err)
  })
  res.json(feedbackData)
  
})

module.exports = router