const mongoose = require('mongoose');

const ProverbsSchema = mongoose.Schema({
   
});

const Proverbs = module.exports = mongoose.model('proverbs', ProverbsSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Proverbs.find(callback);
}