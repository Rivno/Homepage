var express = require('express');
var engine = require('ejs-locals');
var path = require('path');
var favicon = require('serve-favicon');
//var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var compression = require('compression');
var serveStatic = require("serve-static");
var fs = require('fs');
var htmlMapRoute = require("./app/tools/system/htmlMapRoute");

var configuration = JSON.parse(
    fs.readFileSync('config.json')
);

var app = express();

// view engine setup
app.engine('ejs',engine);
app.set('views', path.join(__dirname, 'app/views'));
app.set('view engine', 'ejs');

// gzip/deflate outgoing responses
app.use(compression());

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
//app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());

app.use(serveStatic('./app/public', {'index': ['default.html', 'default.htm']}));

//htmlMapRoute.map(app, { path: __dirname + '/app/controllers/', defaultPage: configuration.defaultPage });
//htmlMapRoute.map(app, { path: __dirname + '/app/api/', prefix: 'api' });

app.get('/', function (req, res) { res.send('Hello'); });

app.get('/api/default', function (req, res) { res.json({"plop": "plop"}); });

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;