const mongoose = require('mongoose');

const url = 'mongodb+srv://admin:16team@cluster0.hhvfw.mongodb.net/Student?retryWrites=true&w=majority';

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

var studentSchema = mongoose.Schema({
    number: {
        type: String, unique: true
    },
    name: String,
    gender: String,
    birth: Date,
    major: String,
    subject1: String,
    subject2: String,
    subject3: String,
    password: String,
});

module.exports = mongoose.model('studentInfo', studentSchema);