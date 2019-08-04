const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise


// Define userSchema
const userSchema = new Schema({

  username: { type: String, unique: true, required: true },
  password: { type: String, unique: false, required: true },
  email: { type: String, unique: true, required: true },
  first: { type: String, required: true },
  last: { type: String, required: true },
  sentRequest:[{
    username: {type: String, default: ''}
    }],
    request: [{
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    username: {type: String, default: ''}
    }],
    friendsList: [{
    friendId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    friendName: {type: String, default: ''}
    }],
    totalRequest: {type: Number, default:0}

})



const User = mongoose.model('User', userSchema)


module.exports = User
