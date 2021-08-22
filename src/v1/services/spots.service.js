const { spotsRepository } = require('../repositories');

const getSpots = async () => {
    try {
        const result = await spotsRepository.getSpots();
        return result;
    }catch (e) {
        throw e;
    }
}

const getSpot = async (id) => {
    const spots = await getSpots();
    return spots.find(spot => parseInt(spot.spot_id, 10) === parseInt(id, 10));
}

module.exports = {
    getSpots: getSpots,
    getSpot: getSpot,
};
