const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true,
    },
    gender: {
        type: String,
        required: true,
        default: 'male',
        trim: true
    },
    age: {
        type: String,
        required: true,
    },
    weight: {
        type: String,
        required: true,
    },
    isDoctor: {
        type: Boolean,
        default: false
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    phone: {
        type: String,
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        trim: true,
        required: true,
    },
    prescriptions: [{ any: Object }],
    address: {
        type: String,
        trim: true,
    },
    photo: {
        type: String,
        trim: true,
    },
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
