const express = require('express');

const router = express.Router();

const Country = require('../models/Country');


router.get('/', async (req, res, next) => {
	try {
		
		const countries = await Country.find({});
		
		res.json(countries);
	} catch (err) {
		
		next(err);
	}
});

router.get('/:id', async (req, res, next) => {
	try {
		
		const country = await Country.findById(req.params.id);
		
		res.json(country);
	} catch (err) {
		
		next(err);
	}
});

router.post('/', async (req, res, next) => {
	try {
		const newCountry = await Country.create(req.body);
		res.status(201).json(newCountry);
	} catch (err) {
		next(err);
	}
});

router.put('/:id', async (req, res, next) => {
	try {
		const updatedCountry = await Country.findByIdAndUpdate(req.params.id, req.body, { new: true })

		if (updatedCountry) {
			res.json(updatedCountry)
		} else {
			res.sendStatus(404)
		}
	}
	catch (err) {
		next(err)
	}
})

router.delete('/:id', async(req, res, next) => {
    try{
        const deletedCountry = await Country.findByIdAndDelete(req.params.id)
        res.json(deletedCountry)
    } catch(err){
        next(err)
    }
})

// Export this router object so that it is accessible when we require the file elsewhere
module.exports = router;