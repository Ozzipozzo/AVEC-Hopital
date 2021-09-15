const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    login : {
        type: String,
        unique: true,
        require: true,
        lowercase: true
    }, 
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    }
});

module.exports = mongoose.model('User', UserSchema);