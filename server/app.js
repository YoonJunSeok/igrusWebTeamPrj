const express = require('express');
const bodyParser = require('body-parser');
const viewRouter = require('./Router/view');
const signRouter = require('./Router/sign');
const apiRouter = require('./Config/API/student');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');

const path = require('path');
const app = express();

app.use(cookieSession({
  name: 'user',
  keys: ['node_yun'],
  cookie: {
    maxAge: 1000 * 60 * 30
  }
}));

app.use(flash());
app.use(passport.initialize());
app.use(passport.session()); 

app.use(express.static(__dirname + '/public'));

app.use("/js", express.static('../js'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', signRouter);
app.use('/', viewRouter);
app.use('/', apiRouter);

app.listen(3000, function() {
    console.log('Start!');
})