const { Router } = require('express');
const router = Router();
const { Dog } = require('../db.js');
router.post('/', async (req, res) => {
	const { name, height, weight, life_span, image, temperaments } = req.body;
	if (temperaments.length === 0)
		return res.sendStatus(500);
	try {
		let newDog = await Dog.create({
			name,height,weight,
			life_span,image
		});
		await newDog.addTemperament(temperaments);
		res.json(newDog);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;

