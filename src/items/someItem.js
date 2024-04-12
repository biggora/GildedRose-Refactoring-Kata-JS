const Item = require('./item');
const { ItemNames } = require('./constants');

class SomeItem extends Item {
  constructor(name = ItemNames.SomeItem, sellIn = 0, quality = 80) {
    super(name, sellIn, quality);
  }
  update() {
    this.sellIn -= 1;
    return this;
  }
}

module.exports = SomeItem;
