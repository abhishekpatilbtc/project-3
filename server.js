const express = require("express");
const db = require("./models")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const http = require('http');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 5000;
var socketIO = require('socket.io');

// Initialize Passport and restore authentication state, if any, from the session.

app.use(passport.initialize());
app.use(passport.session());
const server = http.createServer(app);
const io= socketIO(server);
require('./socket/addFriend')(io);

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Express Session
app.use(session({
  secret: 'secret',
  saveUninitialized: true,
  resave: true
}));

// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/public"));
}

// Flash
app.use(flash());


///
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'client/build')));

// Global
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});

// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/lendingapp",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

//Passport Local Strategy
passport.use(new LocalStrategy(
  function(username, password, done) {
    db.User.findOne({ username: username }, function(err, user) {
      if (err) { return done(err); }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      return done(null, user);
    });
  }
));

// Configure Passport authenticated session persistence.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
