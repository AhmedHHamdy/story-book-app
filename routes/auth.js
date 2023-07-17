// Top level like homepage / or dashboard/ is in index.js
const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] })) // we are using google strategy which we created in our password.js file and we say we want the scope of whatever is available in the profile

// @desc    Google auth callback
// @route   GET /auth/google/callback // this the callback that gonna hit when it fails 
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }), (req, res) => {
  res.redirect('/dashboard') // if it passes it will redirect the dashboard
})

// @desc    Logout user
// @route   /auth/logout
router.get('/logout', (req, res) => {
  req.logOut((err) => {
    if (err) {
      console.error(err);
    }
    res.redirect('/');
  });
});



module.exports = router