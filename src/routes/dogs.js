require('dotenv').config();
const { Router } = require('express');
const router = Router();
const { API_KEY } = process.env;
const { Dog, Temperament, breed_temp } = require('../db.js');
const { Op } = require("sequelize");

router.get('/', async (req, res) => {
    let { name } = req.query;
    try {
        if (name) {
            let query = await Dog.findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${name}%`
                    },
                },
                include: [Temperament]
            })
            if (query.length > 0)
                res.json(query);
            else
                res.status(404).json('Not found');
        } else {
            let query = await Dog.findAll({
                include: [Temperament]
            });
            res.json(query);
        }
    } catch (error) {
        res.status(500).json(error);
    }
});

router.get('/:id', async (req, res) => {
    let { id } = req.params;
    try {
        let query = await Dog.findByPk(id, {
            include: [Temperament]
        });
        if (query)
            res.json(query);
        else
            res.status(404).json('Not found');
    } catch (error) {
        res.status(500).json({ error });
    }
});

module.exports = router;