const mongoose = require('mongoose');

const TitleSchema = mongoose.Schema({
   
});

const Title = module.exports = mongoose.model('title', TitleSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Title.find(callback);
}