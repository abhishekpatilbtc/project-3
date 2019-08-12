const express = require('express');
const app = express();
const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require('../models/user');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;


// Initialize Passport and restore authentication state

app.use(passport.initialize());
app.use(passport.session());


// API Routes
router.use("/api", apiRoutes);



//Get Homepage
router.get('/', function (req, res) {
    res.send(req.user.request);
    console.log("Sending user's request")
});




passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});


router.post('/login',
    function (req, res, next) {
        console.log("routes/user.js, login, req.body: ");
        console.log(req.body);
        next();
    },
    passport.authenticate("local"),
    (req, res) => {
        console.log("logged in", req.user);

        var userInfo = {
            username: req.user.username,
            id: req.user.id
        };
        res.send(userInfo);


    }
);

//If not routes
router.use((req, res) =>
  res.sendFile(path.join(__dirname, "../client/build/index.html"))
);




router.get('/logout', function (req, res) {
    req.logout();
    res.send('User logged out successfully')

});



module.exports = router;
