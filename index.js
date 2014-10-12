var app = require('./server/server.js');
var express = require('./node_modules/express/lib/express.js');

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/client');

app.use(express.static(__dirname + './../client'));

app.get('/', function(req, res) {
  res.render('index');
});

app.listen(1337);