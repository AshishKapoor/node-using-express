var express = require('express')
var router = express.Router();

router.get('/directory', function (req, res) { 
  res.send(` 
    <h1>Directory</h1>
    ${info}
  `)
})

module.exports = router