const chai = require('chai');
const spies = require('chai-spies');
const {Shop: ShopTest} = require('../src/gildedRose');
const {SomeItem} = require('../src/items');

chai.use(spies);

const { expect, spy } = chai;
describe("Shop", function () {
    describe('#updateQuality', function () {
        let mockItem, shop;

        it("should call #update on each item", function () {
            mockItem = new SomeItem('test', 10, 50);
            shop = new ShopTest([mockItem]);
            spy.on(shop.items[0], 'update', () => {});
            shop.updateQuality();
            expect(shop.items[0].update).to.have.been.called();
        });

        it("should return a proper value", function () {
            mockItem = new SomeItem('test', 0, 0);
            shop = new ShopTest([mockItem]);
            shop.updateQuality();
            expect(shop.items[0].sellIn).to.equal(-1);
        });
    });
});
