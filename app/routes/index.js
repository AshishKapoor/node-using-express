var express = require('express')
var router = express.Router()

router.get('/', function (req, res) { // root route
  res.render('index')
})

module.exports = router