class TreasureChest {
  constructor(options) {
    let { gold, silver, bronze, message } = Object.assign({
      "gold": 0,
      "silver": 0,
      "bronze": 0,
      "message": "Your treasure chest contains {{gold}} gold, {{silver}} silver, and {{bronze}} bronze."
    }, options);

    Object.defineProperties(this, {
      "gold": {
        "value": gold,
        "writable": true
      },
      "silver": {
        "value": silver,
        "writable": true
      },
      "bronze": {
        "value": bronze,
        "writable": true
      },
      "_message": {
        "value": message
      }
    });
  } // end constructor method.

  static getRandomLoot() {
    let typeArray = ["gold", "silver", "bronze"];
    let typeValue = Math.floor((Math.random() * 3));
    let type = typeArray[typeValue];
    let amount = Math.floor((Math.random() * 50) + 1);

    return {
      "type": type,
      "amount": amount
    };
  } // end static getRandomLoot method.

  addGold(amount) {
    this.gold = this.gold + amount;
    return this;
  } // end addGold method.
  addSilver(amount) {
    this.silver = this.silver + amount;
    return this;
  } // end addSilver.
  addBronze(amount) {
    this.bronze = this.bronze + amount;
    return this;
  } // end addBronze.
  getLoot() {
    return this._message.replace("{{gold}}", this.gold).replace("{{silver}}", this.silver).replace("{{bronze}}", this.bronze);
  } // end getLoot method.
} // end TreasureChest class.

let captain = new TreasureChest();
let firstMate = new TreasureChest({
  "gold": 5,
  "silver": 5,
  "bronze": 15,
  "message": "The first mate opens his treasure chest to find {{gold}} gold, {{silver}} silver, and {{bronze}} bronze."
});

console.log(captain.getLoot());
console.log(firstMate.getLoot());

captain.addGold(10).addBronze(100).addSilver(10);
firstMate.addSilver(25);

console.log(captain.getLoot());
console.log(firstMate.getLoot());

console.log(TreasureChest.getRandomLoot());