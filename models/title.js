const mongoose = require('mongoose');

const TitleSchema = mongoose.Schema({
   
});

const Title = module.exports = mongoose.model('title', TitleSchema);

// GET ALL POST
Title.exports.getPost = (callback) => {
	Title.find(callback);
}