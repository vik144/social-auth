const express = require('express');
const authRouter = require('./routes/auth-route');
const profileRouter = require('./routes/profile-route');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const cookieSession = require('cookie-session');
const passport = require('passport');
const passportSetup = require('./config/passport');
const app = express();

// set view engine
app.set('view engine', 'ejs');

app.use(cookieSession({
    maxAge: 24 * 60 * 60 * 1000,
    keys: [keys.session.cookieKey]
}));
app.use(passport.initialize());
app.use(passport.session());


//Router
app.use('/auth', authRouter);
app.use('/profile',profileRouter);

//Connect to DB
mongoose.connect(keys.mongodb.dbURI, () => {
    console.log('connected to mongoDB');
})

// create home route
app.get('/', (req, res) => {
res.render('home',{user:req.user});
});

app.listen(3000, () => {
    console.log('app now listening for requests on port 3000');
});
