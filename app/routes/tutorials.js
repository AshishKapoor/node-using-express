var express = require('express')
var router = express.Router();

router.get('/tutorials', function (req, res) { // root/speakers route
  var info = ''
  var dataFile = req.app.get('appData')

  dataFile.speakers.forEach(function(item) { // loop through the speakers
    info += (`
      <link rel="stylesheet" type="text/css" href="/css/style.css">
      <li> 
        <h2>${item.name}</h2>
        <img src="/images/speakers/${item.shortname}_tn.jpg" alt="${item.name}">
        <p>${item.summary}</p>
      </li> 
      `)
  })
  res.send(` 
    <h1>Swift Meetups</h1>
    ${info}
  `)
})

module.exports = router