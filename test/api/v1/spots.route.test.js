const app = require('../../setup/app.setup');
const { expect } = require('../../setup/chai.setup');

describe('/api/v1', function () {
    describe('/spots', function () {
        describe('GET', function () {
            it('returns 200 and a body listing all spots', async function () {
                const res = await app().get('/api/v1/spots');
                expect(res.status).to.equal(200);
                expect(res.body).to.be.an('array');
                expect(res.body).to.deep.equal([
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
                    ]);
            });
        });

        describe('/{id}', function () {
            describe('GET', function () {
                describe(`with valid 'id' param`, function () {
                    const id = 1;
                    it('returns 200 and a body containing the spot requested', async function () {
                        const res = await app().get(`/api/v1/spots/${id}`);
                        expect(res.status).to.equal(200);
                        const expectedSpot = {
                            spot_id: 1,
                            name: 'The Wave',
                            address: 'Washingpool Farm, Main Rd, Easter Compton, Bristol BS35 5RE',
                            description: 'The Wave is an inland surf destination where everyone can surf on consistent, safe waves all year round. Fantastic variety of waves to suit all levels of surfer, from beginner to expert.',
                            date_visited: '2021-08-15'
                        }
                        expect(res.body).to.deep.equal(expectedSpot);
                    });
                });
            });
        });
    });
});