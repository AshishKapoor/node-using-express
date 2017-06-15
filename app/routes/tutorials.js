var express = require('express')
var router = express.Router();

router.get('/tutorials', function (req, res) { // root/speakers route
  res.send(`
  <h1>Tutorials</h1>
  `)
})

module.exports = router