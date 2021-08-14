const router = require('express').Router();
const passport = require('passport');
module.exports = router;

router.use('/google', require('./google'));
