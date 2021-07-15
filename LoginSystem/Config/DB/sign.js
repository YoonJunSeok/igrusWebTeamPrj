const mongoose = require('mongoose');

const url = 'SECRET';

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
