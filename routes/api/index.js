const router = require("express").Router();
const userRoutes = require("./user");
const transactionRoutes = require("./transaction");
const registerRoutes = require("./register");
// const authenticationRoutes = require("./authentication")

// User routes
router.use("/users", userRoutes);

// Transaction routes
router.use("/transactions", transactionRoutes);

//Registration
router.use("/register", registerRoutes);

//Authentication
// router.use("/authentication", authenticationRoutes);

module.exports = router;
