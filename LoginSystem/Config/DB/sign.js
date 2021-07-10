const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:16team@cluster0.hhvfw.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var userSchema = mongoose.Schema({
    name: {
        type: String, unique: true
    },
    password: String
});

module.exports = mongoose.model('users', userSchema);