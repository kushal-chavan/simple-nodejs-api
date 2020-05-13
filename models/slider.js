const mongoose = require('mongoose');

const SliderSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    image: {
        type: String,
        required: true
    },

});

const Slider = module.exports = mongoose.model('slider', SliderSchema, 'slider');

// GET ALL POST
module.exports.getPost = (callback) => {
	Slider.find(callback);
}