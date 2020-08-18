var createError = require('http-errors');
var express = require('express');
var path = require('path');
const cors = require('cors');
const helmet = require('helmet');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var workflowRouter = require('./routes/worflow');
var assetsRouter = require('./routes/assets');
var dataRouter = require('./routes/data');
var dataFilter = require('./routes/dataFilter');
var jwks = require('./routes/jwks');
var ip = require('./routes/ip');
var upload = require('./routes/upload');
var files = require('./routes/files');
var loggerR = require('./routes/logger');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.disable('x-powered-by');
app.use(helmet.noCache())
app.use(helmet({ frameguard: false }))
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Frame-Options, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use('/api', workflowRouter);
app.use('/asset', assetsRouter);
app.use('/data', dataRouter);
app.use('/auth/v1/keystore', jwks);
app.use('/ip', ip);
app.use('/dataFilter', dataFilter);
app.use('/upload', upload);
app.use('/files', files);
app.use('/logger', loggerR);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
