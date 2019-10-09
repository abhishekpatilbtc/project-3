const mongoose = require("mongoose");
const Schema = mongoose.Schema;

  const transactionSchema = new Schema({
  receiver: {
    type: mongoose.Schema.Types.String, // this used to be ObjectID
    ref: 'User',
  },
  sender: {
    type: mongoose.Schema.Types.String, // this used to be ObjectID
    ref: 'User',
  },
  description: String,
  payment: { type: Number},
  amount: { type: Number, required: true },
  userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  interest: { type: Number },
  image: String,
  comments: [{
    text: String,
    date: Date,
    postedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    }
  }],
  date: { type: Date, default: Date.now }
});


const Transaction = mongoose.model("Transaction", transactionSchema);

module.exports= Transaction;