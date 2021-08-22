const { spotsService } = require('../services');

module.exports = {
    getSpots: spotsService.getSpots,
    getSpot: spotsService.getSpot,
};
