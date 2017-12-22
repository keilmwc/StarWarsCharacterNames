const expect = require('chai').expect;
const starWars = require('./index.js');

describe('starwars-character-names', () => {
    describe('all', () => {
    it('should return an array of strings', () => {
        expect(starWars.all).to.satisfy(isArrayOfStrings);
        function isArrayOfStrings(array){
            return array.every((item) => {
                return typeof (item) === 'string';
            });
        }
    });
});

    describe('random', () => {
        it('should return a random string from starwars array', () => {
            var randomItem = starWars.random();
            expect(starWars.all).to.include(randomItem);
        });
        it("should return an array of random items if passed a number", () => {
            var randomItems = starWars.random(3);
            expect(randomItems).to.have.length(3);

            randomItems.forEach((item) => {
                expect(starWars.all).to.include(item);
            })
        })
    });
});