var config = require('./config');
var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.use(serveStatic('public'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', { title: config.title });
});

app.get('/hello/:name', function (req, res) {
  res.send('Hello ' + req.params.name + '!');
});

var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('App listening on port ' + listener.address().port);
});