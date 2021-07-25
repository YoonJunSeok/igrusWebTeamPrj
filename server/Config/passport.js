const LocalStrategy = require('passport-local').Strategy;
const crypto = require('crypto');
const studentSchema = require('./DB/sign.js');
const passport = require('passport');

// 로그인 성공시 사용자 정보를 sesseion에 저장.
passport.serializeUser((user, done) => {
    done(null, user);
});

// 인증 후, 페이지 접근시 마다 사용자 정보를 session에서 조회.
passport.deserializeUser((user, done) => {
    done(null, user);
});

// passport.authenticate 실행 시 실행.
passport.use( new LocalStrategy({
        usernameField: 'stdNum',
        passwordField: 'password'
    },
    (id, password, done) => {
        studentSchema.findOne({number : id, password: password}, (err, result) => {
            if(err) {
                console.log('err :' + err);
                return done(false, null);
            } else if (result === null) {
                console.log('해당 유저가 존재하지 않습니다.');
                return done(false, null);
            } else {
                console.log('로그인 성공');
                return done(null, result.studentNumber);
            }
        })
    })
);

module.exports = passport;