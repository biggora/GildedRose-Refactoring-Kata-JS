const {expect} = require('chai');
const {Shop, Item} = require('../src/gildedRose.js');

describe('Gilded Rose', function() {

  it('should foo', function() {
    const gildedRose = new Shop([ new Item('foo', 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).to.equal('foo');
  });

});
