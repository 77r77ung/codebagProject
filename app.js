/* 설치한 모듈들 명령어
npm install --save express-session
npm install --save body-parser
npm install --save mysql2
npm install nodemon --save
*/
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

/* 따로 설치한 모듈 선언해서 사용
session: 로그인한 사용자 정보 session으로 저장
nodemon: nodemon 깔아두시면 코드 수정한거 바로바로 nodemon이 알아서 반영해서 화면에 뿌려줘용! */
var session = require('express-session');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

const multer = require('multer')

// 라우터 연결
var usersRouter = require('./src/routes/usersRoute');
var mainRouter = require('./src/routes/mainRoute');
var questionRouter = require('./src/routes/questionRoute');

var app = express();

// session 설정
app.use(session({
  secret:'hello',
  resave:false,
  saveUninitialized:true
}));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/public/', express.static('./public'));

app.use('/', mainRouter);
app.use('/users', usersRouter);
app.use('/question', questionRouter);

// 304 관련
app.get('/*', function(req, res, next){
  res.setHeader('Last-Modified', (new Date()).toUTCString());
  next();
});

//method
app.use(methodOverride("_method", {
  methods: ["POST", "GET"]
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
