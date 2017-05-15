var express = require('express')
var router = express.Router()

router.get('/', function (req, res) { // root route
  res.send(`
    <h1>Welcome</h1>
    <p>Swift Meetups</p>
  `)
})

module.exports = router