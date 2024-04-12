const {expect} = require('chai');
const { AgedBrie: AgedBrieTest } = require('../src/items');

describe('AgedBrie', function () {
    describe('#update', function () {
        it('increases quality value by 1', function () {
            let testBrie = new AgedBrieTest(1, 1);
            expect(testBrie.update().quality).to.equal(2);
        });
        it('increases quality value to a maximum of 50', function () {
            let testBrie = new AgedBrieTest(3, 50);
            expect(testBrie.update().quality).to.equal(50);
        });
        describe('given that the sellIn value is 0 or less', function () {
            it('increases quality by 2', function () {
                let testBrie = new AgedBrieTest(0, 1);
                expect(testBrie.update().quality).to.equal(3);
            });
        });
        describe('given that the sellIn value is less than 0', function () {
            it('increases quality by 2', function () {
                let testBrie = new AgedBrieTest(-1, 1);
                expect(testBrie.update().quality).to.equal(3);
            });
        });
    });
});
