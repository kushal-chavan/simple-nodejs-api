const mongoose = require('mongoose');

const ClientsSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    image: {
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
    position: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
});

const Clients = module.exports = mongoose.model('clients', ClientsSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Clients.find(callback);
}