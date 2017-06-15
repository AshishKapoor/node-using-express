var express = require('express')
var router = express.Router();

router.get('/faq', function (req, res) { 
  res.send(` 
    <h1>Frequently asked questions</h1>
  `)
})

module.exports = router