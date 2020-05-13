const mongoose = require('mongoose');

const AccoladesSchema = mongoose.Schema({
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

const Accolades = module.exports = mongoose.model('accolades', AccoladesSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Accolades.find(callback);
}