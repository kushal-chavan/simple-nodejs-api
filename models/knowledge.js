const mongoose = require('mongoose');

const KnownledgeSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: true
    },

});

const Knownledge = module.exports = mongoose.model('knowledge', KnownledgeSchema, 'knowledge');

// GET ALL POST
module.exports.getPost = (callback) => {
    Knownledge.find(callback);
}