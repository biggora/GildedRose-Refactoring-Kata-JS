const Item = require('./item');
const { ItemNames } = require('./constants');
class AgedBrie extends Item {
  constructor(sellIn, quality) {
    super(ItemNames.AgedBrie, sellIn, quality);
  }

  update() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
    }
    this.sellIn -= 1;
    if (this.sellIn < 0 && this.quality < 50) {
      this.quality = this.quality + 1;
    }
    return this;
  }
}

module.exports = AgedBrie;
