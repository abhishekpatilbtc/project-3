const router = require("express").Router();
const User = require('../../models/user');
const Transaction = require('../../models/transaction');
const transactionController = require("../../controllers/transactionController");
const ObjectID = require('mongodb').ObjectID;


router.post('/:id', (req, res) => {
  console.log("Hello!!", req.body);
  const id = req.params.id
  User.findById(id)
    .then(user => {
      Transaction.create({ ...req.body, userId: user._id, sender: `${user.first} ${user.last}` })
        .then(transaction => {
          user.transactionsList.push(transaction);
          User.findOne({ username: req.body.username })
            .then(user => {
              user.transactionsList.push(transaction)
              user.save()
              console.log("this one here", user.image);
              Transaction.updateOne(
                { _id: transaction._id }, { $set: { receiver: `${user.first} ${user.last}`, image: user.image} },{ upsert: true }
              ).catch(err => console.log(err))
            }).catch(err => console.log(err))
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
      res.send({ user })
    });
});


module.exports = router