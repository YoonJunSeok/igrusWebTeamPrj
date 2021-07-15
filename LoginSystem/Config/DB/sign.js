const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:16team@cluster0.hhvfw.mongodb.net/users?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var userSchema = mongoose.Schema({
    studentNumber: {
        type: String, unique: true
    },
    name: String,
    gender: String,
    birth: Date,
    phoneNumber: String,
    address: String,
    password: String,
});

module.exports = mongoose.model('info', userSchema);