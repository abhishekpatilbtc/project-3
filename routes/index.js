const express = require('express');
const app = express();
const path = require("path");
const formidable = require('formidable');
const router = require("express").Router();
const apiRoutes = require("./api");
const User = require('../models/user');
const async = require('async');
const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
var { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Initialize Passport and restore authentication state, if any, from the
// session.

    app.use(passport.initialize());
    app.use(passport.session());


// API Routes
router.use("/api", apiRoutes);



//Get Homepage
router.get('/', function (req, res) {
    res.send(req.user.request);
    console.log("Sending user's request")
});

router.get('/search', function (req, res) {
    var sent = [];
    var friends = [];
    var received = [];
    received = req.user.request;
    sent = req.user.sentRequest;
    friends = req.user.friendsList;


    User.find({ username: { $ne: req.user.username } }, function (err, result) {
        if (err) throw err;

        res.render('search', {
            result: result,
            sent: sent,
            friends: friends,
            received: received
        });
    });
});

router.post('/search', ensureAuthenticated, function (req, res) {
    var searchfriend = req.body.searchfriend;
    if (searchfriend) {
        var mssg = '';
        if (searchfriend == req.user.username) {
            searchfriend = null;
        }
        User.find({ username: searchfriend }, function (err, result) {
            if (err) throw err;
            res.render('search', {
                result: result,
                mssg: mssg
            });
        });
    }

    async.parallel([
        function (callback) {
            if (req.body.receiverName) {
                User.update({
                    'username': req.body.receiverName,
                    'request.userId': { $ne: req.user._id },
                    'friendsList.friendId': { $ne: req.user._id }
                },
                    {
                        $push: {
                            request: {
                                userId: req.user._id,
                                username: req.user.username
                            }
                        },
                        $inc: { totalRequest: 1 }
                    }, (err, count) => {
                        console.log(err);
                        callback(err, count);
                    })
            }
        },
        function (callback) {
            if (req.body.receiverName) {
                User.update({
                    'username': req.user.username,
                    'sentRequest.username': { $ne: req.body.receiverName }
                },
                    {
                        $push: {
                            sentRequest: {
                                username: req.body.receiverName
                            }
                        }
                    }, (err, count) => {
                        callback(err, count);
                    })
            }
        }],
        (err, results) => {
            res.redirect('/search');
        });

    async.parallel([
        // this function is updated for the receiver of the friend request when it is accepted
        function (callback) {
            if (req.body.senderId) {
                User.update({
                    '_id': req.user._id,
                    'friendsList.friendId': { $ne: req.body.senderId }
                }, {
                        $push: {
                            friendsList: {
                                friendId: req.body.senderId,
                                friendName: req.body.senderName
                            }
                        },
                        $pull: {
                            request: {
                                userId: req.body.senderId,
                                username: req.body.senderName
                            }
                        },
                        $inc: { totalRequest: -1 }
                    }, (err, count) => {
                        callback(err, count);
                    });
            }
        },
        // this function is updated for the sender of the friend request when it is accepted by the receiver	
        function (callback) {
            if (req.body.senderId) {
                User.update({
                    '_id': req.body.senderId,
                    'friendsList.friendId': { $ne: req.user._id }
                }, {
                        $push: {
                            friendsList: {
                                friendId: req.user._id,
                                friendName: req.user.username
                            }
                        },
                        $pull: {
                            sentRequest: {
                                username: req.user.username
                            }
                        }
                    }, (err, count) => {
                        callback(err, count);
                    });
            }
        },
        function (callback) {
            if (req.body.user_Id) {
                User.update({
                    '_id': req.user._id,
                    'request.userId': { $eq: req.body.user_Id }
                }, {
                        $pull: {
                            request: {
                                userId: req.body.user_Id
                            }
                        },
                        $inc: { totalRequest: -1 }
                    }, (err, count) => {
                        callback(err, count);
                    });
            }
        },
        function (callback) {
            if (req.body.user_Id) {
                User.update({
                    '_id': req.body.user_Id,
                    'sentRequest.username': { $eq: req.user.username }
                }, {
                        $pull: {
                            sentRequest: {
                                username: req.user.username
                            }
                        }
                    }, (err, count) => {
                        callback(err, count);
                    });
            }
        }
    ], (err, results) => {
        res.redirect('/search');
    });
});

// router.post('/', function (req, res) {
//     var form = new formidable.IncomingForm();
//     form.parse(req);
//     let reqPath = path.join(__dirname, '../');
//     let newfilename;
//     form.on('fileBegin', function (name, file) {
//         file.path = reqPath + 'public/upload/' + req.user.username + file.name;
//         newfilename = req.user.username + file.name;
//     });
//     form.on('file', function (name, file) {
//         User.findOneAndUpdate({
//             username: req.user.username
//         },
//             {
//                 'userImage': newfilename
//             },
//             function (err, result) {
//                 if (err) {
//                     console.log(err);
//                 }
//             });
//     });
//     req.flash('success_msg', 'Your profile picture has been uploaded');
//     res.redirect('/');
// });

// function ensureAuthenticated(req, res, next) {
//     if (req.isAuthenticated()) {
//         return next();
//     } else {
//         //req.flash('error_msg','You are not logged in');
//         res.redirect('/login');
//     }
// }
///////


// Login
router.get('/login', function (req, res) {
});

passport.use(new LocalStrategy(
    function (username, password, done) {
        User.getUserByUsername(username, function (err, user) {
            if (err) throw err;
            if (!user) {
                return done(null, false, { message: 'Unknown User' });
            }

            User.comparePassword(password, user.password, function (err, isMatch) {
                if (err) throw err;
                if (isMatch) {
                    return done(null, user);
                } else {
                    return done(null, false, { message: 'Invalid password' });
                }
            });
        });
    }));

passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    User.getUserById(id, function (err, user) {
        done(err, user);
    });
});

// router.post('/login',
//     passport.authenticate('local', {  failureRedirect: '/login' }),
//     function (req, res) {
//             res.send({ message: 'User logged in successfully'})
//         });

router.post(
    "/login",
    function(req, res, next) {
      console.log("routes/user.js, login, req.body: ");
      console.log(req.body);
      next();
    },
    passport.authenticate("local"),
    (req, res) => {
      console.log("logged in", req.user);
      console.log("req.account:", req.account);
      var userInfo = {
        username: req.user.username,
        id: req.user.id
      };
      res.send(userInfo);

    }
  );








router.get('/logout', function (req, res) {
    req.logout();
    res.send('User logged out successfully')

    // req.flash('success_msg', 'You are logged out');
});



module.exports = router;
