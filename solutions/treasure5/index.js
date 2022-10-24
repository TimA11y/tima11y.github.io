class TreasureChest {
  #bronze;
  #gold;
  #message;
  #silver;

  constructor(options) {
    let { bronze, gold, message, silver } = Object.assign({
      "bronze": 0,
      "gold": 0,
      "silver": 0,
      "message": "Your treasure chest contains {{gold}} gold, {{silver}} silver, and {{bronze}} bronze."
    }, options);

    this.#bronze = bronze;
    this.#gold = gold;
    this.#silver = silver;
    this.#message = message;

  } // end constructor method.


  /**
   * Randomly shuffle an array
   * https://stackoverflow.com/a/2450976/1293256
   * @param  {Array} array The array to shuffle
   * @return {Array}       The shuffled array
   */
  static #shuffle(array) {

    let currentIndex = array.length;
    let temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;

  } // end shuffle.

  static #createDiceArray(maxValue, minValue = 1) {
    let results = [];
    for (let i = minValue; i <= maxValue; i++) {
      results.push(i);
    } // end for i.

    return results;
  }; // end createDiceArray.

  static getRandomLoot() {
    let type = TreasureChest.#shuffle(["gold", "silver", "bronze"]).shift();
    let amount = this.#shuffle(this.#createDiceArray(50)).shift();
    return {
      "type": type,
      "amount": amount
    };
  } // end static getRandomLoot.


  /**  
   * Creates and emits a custom event.
   * @param {string} type - type of event to dispatch.
   * @param {*} details - any details you want to include.
  */
  #emit(type, details) {
    let event = new CustomEvent(type, {
      "bubbles": true,
      "cancelable": true,
      "detail": details
    });

    return document.dispatchEvent(event);
  } // end #emit method.

  addGold(amount) {
    let oldValue = this.#gold;
    this.#gold = this.#gold + amount;
    let newValue = this.#gold;
    this.#emit("treasure:gold", `Added gold. Old: ${oldValue}, New: ${newValue}`);
    return this;
  } // end addGold.

  addSilver(amount) {
    let oldValue = this.#silver;
    this.#silver = this.#silver + amount;
    let newValue = this.#silver;
    this.#emit("treasure:silver", `Added silver. Old: ${oldValue}, New: ${newValue}`);
    return this;
  }  // end addSilver.

  addBronze(amount) {
    let oldValue = this.#bronze;
    this.#bronze = this.#bronze + amount;
    let newValue = this.#bronze;
    this.#emit("treasure:bronze", `Added Bronze. Old: ${oldValue}, New: ${newValue}`);
    return this;
  } // end addBronze.

  getGold() {
    return this.#gold;
  } // end getGold.

  getSilver() {
    return this.#silver;
  } // end getSilver.

  getBronze() {
    return this.#bronze;
  } // end getBronze.

  getLoot() {
    return this.#message.replace("{{gold}}", this.#gold).replace("{{silver}}", this.#silver).replace("{{bronze}}", this.#bronze);
  } // end getLoot.

} // end TreasureChest class.

function reportEvent(event) {
  console.log(`Type: ${event.type}\nDetails: ${event.detail}`);
}

document.addEventListener("treasure:gold", reportEvent);
document.addEventListener("treasure:silver", reportEvent);
document.addEventListener("treasure:bronze", reportEvent);




// Main.
let captain = new TreasureChest({
  "gold": 10,
  "silver": 50,
  "message": "The captain's chest holds {{gold}} gold, {{silver}} silver, and {{bronze}} bronze."
});
let firstMate = new TreasureChest();

console.log(captain.getLoot());
console.log(firstMate.getLoot());

captain.addSilver(12).addBronze(30);
firstMate.addGold(1).addBronze(30);

console.log(captain.getLoot());
console.log(firstMate.getLoot());

console.log(TreasureChest.getRandomLoot());

console.log(captain.getGold());


