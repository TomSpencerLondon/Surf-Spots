const express = require('express');

const root = require('./root.route');
const spots = require('./spots.route');

const router = express.Router();

router.use('/', root);
router.use('/spots', spots);

module.exports = router;
