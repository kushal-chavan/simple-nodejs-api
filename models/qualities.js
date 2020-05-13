const mongoose = require('mongoose');

const QualitiesSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    icon: {
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

const Qualities = module.exports = mongoose.model('qualities', QualitiesSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Qualities.find(callback);
}