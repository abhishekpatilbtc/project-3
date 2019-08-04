// const express = require("express");
// const db = require("../models");
// const router = require("express").Router();
// const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
// const app = express();

// //Passport Local Strategy
// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     db.User.findOne({ username: username }, function(err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       return done(null, user);
//     });
//   }
// ));

// // Configure Passport authenticated session persistence.
// // In order to restore authentication state across HTTP requests, Passport needs to serialize users into and deserialize users out of the session.  The
// // typical implementation of this is as simple as supplying the user ID when serializing, and querying the user record by ID from the database when deserializing.
// passport.serializeUser(function(user, cb) {
//   cb(null, user.id);
// });

// passport.deserializeUser(function(id, cb) {
//   db.User.findById(id, function (err, user) {
//     if (err) { return cb(err); }
//     cb(null, user);
//   });
// });

// // Initialize Passport and restore authentication state, if any, from the
// // session.
// app.use(passport.initialize());
// app.use(passport.session());



// router.post('/login', 
// passport.authenticate('local', { failureRedirect: '/login' }),
// function(req, res) {
//  res.send(req.user)
// });

// router.get('/logout', function(req, res) {
//   req.logout()
//   res.send('logged out successfully')
// })

// module.exports = router;