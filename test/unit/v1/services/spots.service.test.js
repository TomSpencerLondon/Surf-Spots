const rewire = require('rewire');

const { expect } = require('../../../setup/chai.setup');

const spotsService = rewire('../../../../src/v1/services/spots.service');

const getSpot = spotsService.__get__('getSpot');

describe('spots.service.js', function () {
    describe('getSpot(1)', function() {
        describe('valid args', function () {
            describe('1', function () {
                it(`returns the spot '1'`, async function () {
                    const result = await getSpot('1');
                    expect(result).to.deep.include({
                            spot_id: 1,
                            name: 'The Wave',
                            address: 'Washingpool Farm, Main Rd, Easter Compton, Bristol BS35 5RE',
                            description: 'The Wave is an inland surf destination where everyone can surf on consistent, safe waves all year round. Fantastic variety of waves to suit all levels of surfer, from beginner to expert.',
                            date_visited: '2021-08-15'
                        });
                });
            });
        });
    });
});