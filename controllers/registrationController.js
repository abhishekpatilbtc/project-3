const db = require("../models");
const path = require("path");
const router = require("express").Router();

router.post('/', function(req, res) {
    const { first, last, username, email, password } = req.body;
    const user = new db.User({  first, last, username, email, password });
    user.save(function(err) {
      if (err) {
        console.log(err)
        res.status(500)
          .send("Error registering new user please try again.");
      } else {
        res.redirect('/login');
      }
    });
  });

  module.exports = router