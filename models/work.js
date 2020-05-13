const mongoose = require('mongoose');

const WorkSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },

});

const Work = module.exports = mongoose.model('work', WorkSchema, 'work');

// GET ALL POST
module.exports.getPost = (callback) => {
	Work.find(callback);
}