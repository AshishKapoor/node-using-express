var express = require('express')
var router = express.Router();

router.get('/tutorials', function (req, res) { // root/speakers route
  res.send(` 
    <p>${req}</p>
    <p>${res}</p>
    <a href="https://www.youtube.com"> Youtube.com </a>
  `)
})

module.exports = router