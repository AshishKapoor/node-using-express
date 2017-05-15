var express = require('express')
var router = express.Router();

router.get('/speakers', function (req, res) { // root/speakers route
  var info = ''
  var dataFile = req.app.get('appData')

  dataFile.speakers.forEach(function(item) { // loop through the speakers
    info += (`
      <li> 
        <h2>${item.name}</h2>
        <p>${item.summary}</p>
      </li> 
      `)
  })
  res.send(` 
    <h1>Swift Meetups</h1>
    ${info}
  `)
})

router.get('/speakers/:speakerid', function (req, res) { // root/speakers/<speakerid> route
  var dataFile = req.app.get('appData')
  var speaker = dataFile.speakers[req.params.speakerid];
  
  res.send(`
    <h1>${speaker.title}</h1>
    <h2>with ${speaker.name}</h2>
    <p>${speaker.summary}</p>
  `)
})

module.exports = router