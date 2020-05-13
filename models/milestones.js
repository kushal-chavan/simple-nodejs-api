const mongoose = require('mongoose');

const MilestonesSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    icon: {
        type: String,
        required: true
    },
    count_from: {
        type: String,
        required: true
    },
    count_to: {
        type: String,
        required: true
    },
    interval: {
        type: String,
        required: true
    },
    static_count: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },

});

const Milestones = module.exports = mongoose.model('milestones', MilestonesSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Milestones.find(callback);
}