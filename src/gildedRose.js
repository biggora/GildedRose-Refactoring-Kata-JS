const {
  Item,
  AgedBrie,
  BackstagePass,
  HandRagnaros,
  ConjuredItem,
  SomeItem,
} = require('./items');
const {
  ItemNames
} = require('./items/constants');

class Shop {
  constructor(items = []) {
    this.items = items.map((item) => {
      switch (item.name) {
        case ItemNames.HandRagnaros:
          return new HandRagnaros();
        case ItemNames.AgedBrie:
          return new AgedBrie(item.sellIn, item.quality);
        case ItemNames.BackstagePass:
          return new BackstagePass(item.sellIn, item.quality);
        case ItemNames.ConjuredItem:
          return new ConjuredItem(item.name, item.sellIn, item.quality);
        default:
          return new SomeItem(item.name, item.sellIn, item.quality);
      }
    });
  }

  updateQuality() {
    this.items.forEach((item) => item.update());
    return this.items;
  }
}

module.exports = {
  Shop, Item
};
