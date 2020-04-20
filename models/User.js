const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    payment: [
        {
            name: {
                type: String,
                required: true,
            },
            ccn: {
                type: String,
                length: 16 || 19,
                required: true,
            },
            month: {
                type: Number,
                required: true,
            },
            year: {
                type: Number,
                required: true,
            },
            cvv2: {
                type: Number,
                required: true,
                length: 3,
            },
        },
    ],
});

// eslint-disable-next-line no-multi-assign, no-undef
module.exports = User = mongoose.model('user', UserSchema);
