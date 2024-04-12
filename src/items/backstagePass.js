const Item = require('./item');
const { ItemNames } = require('./constants');

class BackstagePass extends Item {
  constructor(sellIn, quality) {
    super(ItemNames.BackstagePass, sellIn, quality);
  }

  update() {
    if (this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.sellIn < 11 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality = 0;
    }
    return this;
  }
}

module.exports = BackstagePass;
