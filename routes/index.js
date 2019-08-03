const router = require("express").Router();
const authRoute = require('../controllers/authController')
// const login = require('../controllers/login')

// API Routes
router.use("/api/auth", authRoute);

//Passport Routes
// router.use("/login", login);

module.exports = router;
