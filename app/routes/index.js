var express = require('express')
var router = express.Router()

router.get('/', function (req, res) { // root route
  res.send(`
    <link rel="stylesheet" type="text/css" href="/css/style.css">
    <h1>Welcome</h1>
    <img src="/images/misc/background.jpg" alt="background" style="height: 300px;">
    <p>Swift Meetups</p>
    <script src="/reload/reload.js"></script>
  `)
})

module.exports = router