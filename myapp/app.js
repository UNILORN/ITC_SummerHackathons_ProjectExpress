var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var users = require('./routes/users');

var app = express();
var server = require('http').Server(app);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
console.log(__dirname + '/public');
app.use(express.static(__dirname + '/public'));

app.use('/', routes);
app.use('/users', users);

var io = require("socket.io")(server);

io.sockets.on("connection", function (socket) {
  socket.on("publish", function () {
    io.sockets.emit("publish", {});
  });
});
server.listen(3000)
module.exports = app;
