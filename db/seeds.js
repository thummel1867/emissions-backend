const mongoose = require('./connection');

const Country = require('../models/Country');
const countryseeds = require('./seeds.json');

Country.deleteMany({})
	.then(() => User.deleteMany({}))
	.then(() => {
		return 
				countryseeds.map((countries) => ({ ...countries, owner: user._id }))
			
			.then((bookmarks) => Bookmark.insertMany(bookmarks));
	})
	.then(console.log)
	.catch(console.error)
	.finally(() => {
		process.exit();
	});