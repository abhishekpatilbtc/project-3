const express = require("express");
const db = require("./models")
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const passport = require('passport'), LocalStrategy = require('passport-local').Strategy;
const PORT = process.env.PORT || 3001;
// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

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
// In order to restore authentication state across HTTP requests, Passport needs to serialize users into and deserialize users out of the session.  The
// typical implementation of this is as simple as supplying the user ID when serializing, and querying the user record by ID from the database when deserializing.
passport.serializeUser(function(user, cb) {
  cb(null, user.id);
});

passport.deserializeUser(function(id, cb) {
  db.User.findById(id, function (err, user) {
    if (err) { return cb(err); }
    cb(null, user);
  });
});

// Initialize Passport and restore authentication state, if any, from the
// session.
app.use(passport.initialize());
app.use(passport.session());

//Login API
app.post('/login', 
  passport.authenticate('local', { failureRedirect: '/login' }),
  function(req, res) {
   res.send(req.user)
  });

app.get('/logout', function(req, res) {
  req.logout()
  res.send('Logged out successfully')
})


// Start the API server
app.listen(PORT, () =>
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`)
);
