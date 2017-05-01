var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('<h2>Hello World</h2>')
})

var server = app.listen(3000, function () {
  console.log('app listening on port 3000!')
});



// SIMPLE SERVER
// var http = require('http')

// var myServer = http.createServer(function (req, res) {
//   res.writeHead(200, {"Content-Type": "text/html"});
//   res.write("<h1>Roux Meetup</h1>");
//   res.end();
// })


// myServer.listen(3000);
// console.log("Go to localhost:3000 of your browser.");