const { google } = require('googleapis');
const router = require('express').Router();
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
module.exports = router;

router.get('/', passport.authenticate('google', {scope: ['email', 'https://www.googleapis.com/auth/calendar']}));

router.get('/callback',
    passport.authenticate('google', {
        successRedirect: '/',
        failureRedirect: '/'
    })
);

passport.use(
    new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: '/google/callback'
    },
    (token, refreshToken, profile, done) => {

        done();
    })
)
passport.serializeUser((user, done) => {
    done(null, user)
  })

  passport.deserializeUser((user, done) => {
    try {
      done(null, user)
    } catch (error) {
      done(error)
    }
  })  
