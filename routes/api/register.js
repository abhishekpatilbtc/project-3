const router = require("express").Router();
const registrationController = require('../../controllers/registrationController')

router.use("/",registrationController)

module.exports = router;