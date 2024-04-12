const {expect} = require('chai');
const { HandRagnaros: HandRagnarosTest } = require('../src/items');

describe('HandRagnaros', function () {
    describe('#update', function () {
        let testHandRagnaros = new HandRagnarosTest(1, 80);

        it('does not reduce sellIn value', function () {
            expect(testHandRagnaros.update().sellIn).to.equal(1);
        });
        it("does not change quality value", function () {
            expect(testHandRagnaros.update().quality).to.equal(80);
        });
    });
});
