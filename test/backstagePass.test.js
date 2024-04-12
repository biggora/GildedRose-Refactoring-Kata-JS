const {expect} = require('chai');
const { BackstagePass: BackStagePass } = require('../src/items');

describe('BackStagePass', function () {
    it('increases quality value to a maximum of 50', function () {
        let testPass = new BackStagePass(11, 50);
        expect(testPass.update().quality).to.equal(50);
    });
    describe('given that the sellIn value is greater than 10', function () {
        it('increases quality value by 1', function () {
            let testPass = new BackStagePass(11, 20);
            expect(testPass.update().quality).to.equal(21);
        });
    });
    describe('given that the sellIn value is 10 or less', function () {
        it('increases quality value by 2', function () {
            let testPass = new BackStagePass(10, 20);
            expect(testPass.update().quality).to.equal(22);
        });
    });
    describe('given that the sellIn value is 5 or less', function () {
        it('increases quality value by 3', function () {
            let testPass = new BackStagePass(5, 20);
            expect(testPass.update().quality).to.equal(23);
        });
    });
    describe('given that the sellIn value is 0', function () {
        it('sets quality value to 0', function () {
            let testPass = new BackStagePass(0, 20);
            expect(testPass.update().quality).to.equal(0);
        });
    });
    describe('given that the sellIn value is less than 0', function () {
        it('sets quality value to 0', function () {
            let testPass = new BackStagePass(-1, 20);
            expect(testPass.update().quality).to.equal(0);
        });
    });
});
