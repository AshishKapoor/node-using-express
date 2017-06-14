var express = require('express')
var router = express.Router();

router.get('/faq', function (req, res) { // root/speakers route
  res.send(` 
    <h1>Frequently asked questions</h1>
  `)
})

module.exports = router