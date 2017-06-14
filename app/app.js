var express = require('express')
var app = express()
var reload = require('reload')
var dataFile = require('./data/data.json')

app.set('port', process.env.PORT || 3000)
app.set('appData', dataFile)

app.set('view engine', 'ejs')
app.set('views', 'app/views')

app.use(require('./routes/index'))
app.use(express.static('app/public'))
app.use(require('./routes/speakers'))
app.use(require('./routes/tutorials'))
app.use(require('./routes/registration'))
app.use(require('./routes/faq'))
app.use(require('./routes/directory'))

var server = app.listen(app.get('port'), function () { // 
  console.log('app listening on port ' + app.get('port'))
})

reload(server, app)