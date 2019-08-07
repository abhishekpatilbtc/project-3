const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise

const transactionSchema = require("../models/transaction").transactionSchema;


// Define userSchema
const userSchema = new Schema({

    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    sentRequest: [{
        username: { type: String, default: '' }
    }],
    request: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        username: { type: String, default: '' }
    }],
    friendsList: [{
        friendId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        friendName: { type: String, default: '' }
    }],
    totalRequest: { type: Number, default: 0 },
    transactionsList:[{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'
    }]
})

    // transactionList: [{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}]
    // transactionsList: [transactionSchema],
    // child: transactionSchema
const User = mongoose.model('User', userSchema)


module.exports = User;


// module.exports.createUser = function (newUser, callback) {
//     bcrypt.genSalt(10, function (err, salt) {
//         bcrypt.hash(newUser.password, salt, function (err, hash) {
//             newUser.password = hash;
//             newUser.save(callback);
//         });
//     });
// }

// module.exports.getUserByUsername = function (username, callback) {
//     var query = { username: username };
//     User.findOne(query, callback);
// }

// module.exports.getUserById = function (id, callback) {
//     User.findById(id, callback);
// }

// module.exports.comparePassword = function (candidatePassword, hash, callback) {
//     bcrypt.compare(candidatePassword, hash, function (err, isMatch) {
//         if (err) throw err;
//         callback(null, isMatch);
//     });
    
// }