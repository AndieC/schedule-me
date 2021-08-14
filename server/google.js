const { google } = require('googleapis');
const { OAuth2 } = google.auth;
const passport = require('passport');
const router = require('./routes');

router.get('/', passport.authenticate('google', {scope: 'email'}));
//creating a new instance of oauth2 client
const oauth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET, process.env.REDIRECT_URL);
//creting the google auth url
const googleUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: 'https://www.googleapis.com/auth/calendar'
});

// const { tokens } = oauth2Client.getAccessToken(data);
// oauth2Client.setCredentials(tokens);