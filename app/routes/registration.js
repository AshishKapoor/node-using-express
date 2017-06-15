var express = require('express')
var router = express.Router();

router.get('/registration', function (req, res) { 
  res.send(` 
    <h1>Registration</h1>
    ${info}
  `)
})

module.exports = router