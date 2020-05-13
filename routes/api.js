const express = require('express');
const router = express.Router();
// Models
const Qualities = require('../models/qualities');
const Skills = require('../models/skills');
const Works = require('../models/work');
const Profile = require('../models/profile');
const Milestones = require('../models/milestones');
const Knowledge = require('../models/knowledge');
const Education = require('../models/education');
const Clients = require('../models/clients');
const Accolades = require('../models/accolades');
const Proverbs = require('../models/proverbs');
const Slider = require('../models/slider');

router.get('/qualities', (req, res) => {
	Qualities.getPost((err, qualities) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(qualities, null, 3));
	});
});

router.get('/slider', (req, res) => {
	Slider.getPost((err, slider) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(slider, null, 3));
	});
});

router.get('/proverbs', (req, res) => {
	Proverbs.getPost((err, proverbs) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(proverbs, null, 3));
	});
});


router.get('/milestones', (req, res) => {
	Milestones.getPost((err, milestones) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(milestones, null, 3));
	});
});

router.get('/skills', (req, res) => {
	Skills.getPost((err, skills) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(skills, null, 3));
	});
});

router.get('/clients', (req, res) => {
	Clients.getPost((err, clients) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(clients, null, 3));
	});
});

router.get('/accolades', (req, res) => {
	Accolades.getPost((err, accolades) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    res.send(JSON.stringify(accolades, null, 3));
	});
});

router.get('/work', (req, res) => {
	Works.getPost((err, work) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(work, null, 3));
	});
});

router.get('/profile', (req, res) => {
	Profile.getPost((err, profile) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(profile, null, 3));
	});
});

router.get('/knowledge', (req, res) => {
	Knowledge.getPost((err, knowledge) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(knowledge, null, 3));
	});
});

router.get('/education', (req, res) => {
	Education.getPost((err, education) => {
		if(err){
			throw err;
		}
		res.header("Content-Type",'application/json');
    	res.send(JSON.stringify(education, null, 3));
	});
});

module.exports = router;