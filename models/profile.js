const mongoose = require('mongoose');

const ProfileSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    body: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    },

});

const Profile = module.exports = mongoose.model('profile', ProfileSchema, 'profile');

// GET ALL POST
module.exports.getPost = (callback) => {
	Profile.find(callback);
}