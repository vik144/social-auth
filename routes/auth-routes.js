const express = require('express');
const router = express.Router();

router.get('/login',(req,res) => {
    res.render('login');
});

//logout route
router.get('/logout', (req,res) =>{
    res.send('Logging out Now');
});

//Google auth
router.get('/google',(req,res) => {
    res.send('Logging in with Google');
})

module.exports = router;