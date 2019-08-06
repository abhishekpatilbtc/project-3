const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const transactionSchema = new Schema({
  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  sentBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  description: String,
  payment: { type: Number},
  amount: { type: Number, required: true },
  interest: { type: Number },
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

module.exports = Transaction