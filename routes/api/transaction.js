const router = require("express").Router();
const User = require('../../models/user');
const Transaction = require('../../models/transaction');
const transactionController = require("../../controllers/transactionController")

// router.route("/")
// // .get(transactionController.findAll)
// // //.post(transactionController.create);

// router.route("/:id")
// // .get(transactionController.findById)
// .put(transactionController.update)
// // .delete(transactionController.remove);


router.post('/:id', (req, res) => {
  const id = req.params.id
  User.findById(id)
    .then(user => {
      Transaction.create({ ...req.body, userId: user._id })
        .then(transaction => {
          user.transactionsList.push(transaction);
          User.findOne({ username: req.body.un })
            .then(user => {
              user.transactionsList.push(transaction)
              user.save()
            })
          user.save().then(res.send({ message: 'Transaction added successfully!' }))
        });
    }).catch((err) => {
      console.log(err)
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id
  User.findById(id)
    .populate('transactionsList')
    .then(user => {
      // the user object would now have the transactionList property with all the transactions
      res.send({ user })

    });

});


module.exports = router