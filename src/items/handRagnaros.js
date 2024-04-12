const Item = require('./item');
const {ItemNames} = require("./constants");

class HandRagnaros extends Item {
  constructor(sellIn, quality) {
    super(ItemNames.HandRagnaros, sellIn, quality);
  }

  update() {
    return this;
  }
}

module.exports = HandRagnaros;
