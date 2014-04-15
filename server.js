var http = require('http');
var express = require('express');

var app = express();

app.get('/hello', function(req, res){
  res.send('hello, world');
})

http.createServer(app).listen(9013, function() {
  console.log('web server listening on port 9013');
});