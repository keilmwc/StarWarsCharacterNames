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
    describe('byFirstCharOfFirstName', () => {
        it('should return array of names whos first name begins with specified char', () => {
            var char = 'a';
            expect(starWars.byFirstCharOfFirstName(char)).to.satisfy(firstNamesDoBeginWithChar);
            function firstNamesDoBeginWithChar(array){
                return array.every((item) => {
                    return (item.charAt(0)) === char.toUpperCase() || char.toLowerCase();
                });
            }
        });
    });
    describe('bySecondCharOfSecondName', () => {
        it('should return array of names whos last name begins with specified char', () => {
            var char = 'a';
            expect(starWars.byFirstCharOfSecondName(char)).to.satisfy(lastNamesDoBeginWithChar);
            function lastNamesDoBeginWithChar(array){
                return array.every((item) => {
                    var name = item.split(" ");
                    return (name[name.length - 1].charAt(0)) === char.toUpperCase() || char.toLowerCase();
                });
            }
        });
    });
});
