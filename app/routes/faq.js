var express = require('express')
var router = express.Router();

router.get('/faq', function (req, res) { // root/speakers route
  var info = ''
  res.send(` 
    <h1>Swift Meetups</h1>
    ${info}
  `)
})

module.exports = router