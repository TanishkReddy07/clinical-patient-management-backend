var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
const mongoose = require('mongoose');

mongoose.connect(
  // 'mongodb+srv://admin:admin@cocomart.ig3dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
  'mongodb+srv://admin:admin@patientdata.bioewnr.mongodb.net/patientRecords?retryWrites=true&w=majority'
);

var indexRouter = require('./routes/index');
var patientsRouter = require('./routes/patient');

var app = express();

app.use(logger('dev'));
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', '*');
  next();
});

app.use(cors());
app.use('/', indexRouter);
app.use('/api/v1', patientsRouter);

module.exports = app;
