const { google } = require('googleapis');
const { OAuth2 } = google.auth;

const oAuth2Client = new OAuth2(process.env.CLIENT_ID, process.env.CLIENT_SECRET);

oAuth2Client.setCredentials({refresh_token: process.env.REFRESH_TOKEN});