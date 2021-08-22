const getSpots = () => [
    {
        spot_id: 1,
        name: 'The Wave',
        address: 'Washingpool Farm, Main Rd, Easter Compton, Bristol BS35 5RE',
        description: 'The Wave is an inland surf destination where everyone can surf on consistent, safe waves all year round. Fantastic variety of waves to suit all levels of surfer, from beginner to expert.',
        date_visited: '2021-08-15'
    },
    {
        spot_id: 2,
        name: 'Croyde',
        address: 'Croyde Bay, Croyde, Braunton EX33 1NU',
        description: 'Thought to be one of the best places to surf in the UK, in competition with Cornish waves, Croyde gets our vote any day. The waves are good on all tides, but especially at low tide.',
        date_visited: '2020-09-10'
    },
    {
        spot_id: 3,
        name: 'Fistral',
        address: 'Fistral Beach, Newquay, Cornwall TR7 1HY',
        description: 'This splendid beach offers excellent water for surfing and body boarding.',
        date_visited: '2020-08-06'
    }
];

const getSpot = (id) => getSpots()
    .find(spot => parseInt(spot.spot_id, 10) === parseInt(id, 10));

module.exports = {
    getSpots: getSpots,
    getSpot: getSpot,
};
