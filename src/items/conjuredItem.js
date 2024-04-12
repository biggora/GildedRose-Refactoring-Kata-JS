const Item = require('./item');
const {ItemNames} = require('./constants');

class ConjuredItem extends Item {
  constructor(sellIn, quality) {
    super(ItemNames.ConjuredItem, sellIn, quality);
  }
  update() {
    this.sellIn -= 1;
    this.quality = Math.max(0, this.sellIn > 0 ? this.quality - 2 : this.quality - 4);
    return this;
  }
}

module.exports = ConjuredItem;
