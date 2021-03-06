const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;



// Define userSchema
const userSchema = new Schema({

    username: { type: String, unique: true, required: true },
    password: { type: String, unique: false, required: true },
    email: { type: String, unique: true, required: true },
    first: { type: String, required: true },
    last: { type: String, required: true },
    image: { type: String, default: '' },
    sentRequest: [{
        username: { type: String, default: '' }
    }],
    request: [{
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        username: { type: String, default: '' }
    }],
    friendsList: [{type: Schema.Types.ObjectId, ref: 'User' }],
    totalRequest: { type: Number, default: 0 },
    transactionsList:[{type: mongoose.Schema.Types.ObjectId, ref: 'Transaction'}]
})

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