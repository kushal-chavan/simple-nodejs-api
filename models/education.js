const mongoose = require('mongoose');

const EducationSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    tagline: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
});

const Education = module.exports = mongoose.model('education', EducationSchema, 'education');

// GET ALL POST
module.exports.getPost = (callback) => {
	Education.find(callback);
}