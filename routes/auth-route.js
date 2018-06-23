const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportSetup = require('../config/passport');

router.get('/login',(req,res) => {
    res.render('login',{user: req.user});
});

//logout route
router.get('/logout', (req,res) =>{
    req.logout();
    res.redirect('/');
});

//Google auth
router.get('/google',passport.authenticate('google',{
    scope: ['profile']
}))

//Callback route
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
    res.redirect('/profile');
});


module.exports = router;