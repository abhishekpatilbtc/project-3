const router = require("express").Router();
const transactionController = require("../../controllers/transactionController")

router.route("/")
.get(transactionController.findAll)
.post(transactionController.create);

router.route("/:id")
.get(transactionController.findById)
.put(transactionController.update)
.delete(transactionController.remove);

module.exports = router;