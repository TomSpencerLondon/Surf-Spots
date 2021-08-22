const express = require('express');

const { spotsController } = require('../controllers');

const router = express.Router();

router.get('/', async (req, res) => {
    const spots = await spotsController.getSpots();
    res.status(200).send(spots);
});

router.get('/:id', async (req, res) => {
    const spotId = req.params.id;
    const spot = await spotsController.getSpot(spotId);
    if (!spot) {
        res.status(404).send(`Spot ${spotId} not found`);
    } else {
        res.status(200).send(spot);
    }
});

module.exports = router;
