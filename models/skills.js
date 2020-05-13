const mongoose = require('mongoose');

const SkillsSchema = mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    skill: {
        type: String,
        required: true
    },
    percent: {
        type: String,
        required: true
    },

});

const Skills = module.exports = mongoose.model('skills', SkillsSchema);

// GET ALL POST
module.exports.getPost = (callback) => {
	Skills.find(callback);
}