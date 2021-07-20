const express = require('express');
const bodyParser = require('body-parser');
const router = require('./Config/router.js');
const passport = require('passport');
const flash = require('connect-flash');
const cookieSession = require('cookie-session');
const fetch = require('node-fetch');

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

app.use(bodyParser.urlencoded({extended: false}));

app.set('port', process.env.PORT || 3000);
app.set('views', './views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use('/', router);

app.listen(3000, function() {
    console.log('Start!');
})