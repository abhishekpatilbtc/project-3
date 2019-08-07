const router = require("express").Router();
const userRoutes = require("./user");
const transactionRoutes = require("./transaction");
const registerRoutes = require("./register");
const User = require("../../models");

// const authenticationRoutes = require("./authentication")

// User routes
router.use("/users", userRoutes);

// Transaction routes
router.use("/transactions", transactionRoutes);

//Registration
router.use("/register", registerRoutes);


router.get('/search', function (req, res) {
    console.log(req.user.username)
    User.find({ username: { $ne: req.user.username } }, function (err, result) {
        if (err) throw err;
        res.render('search', {
            result: result
        });
    });
});

//Authentication
// router.use("/authentication", authenticationRoutes);

module.exports = router;
