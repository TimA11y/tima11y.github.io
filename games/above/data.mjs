// Import modules
import { building_cards } from "./building_cards.mjs";
import { key_cards } from "./key_cards.mjs";
import { outpost_cards } from "./outpost_cards.mjs";
import { star_cards } from "./star_cards.mjs";

/**
 * Discard the tableau card.
 * @param {Object} typeCards - Object containing deck and tableau cards.
 * @param {String} key - card key.
 */
const discard = function (typeCards, key) {
  typeCards.tableau.delete(key);
}; // end discard.

/**
 * Move a copy of a card from the deck to the tableau.
 * @param {Object} typeCards - The deck and tableau cards.
 * @param {Stinrg} key - card key.
 */
const move = function (typeCards, key) {
  let card = typeCards.deck.get(key);
  typeCards.tableau.set(key, card);
}; // end move.

const gameData = {
  "buildings": {
    "deck": building_cards,
    "tableau": new Map()
  },
  "keys": {
    "deck": key_cards,
    "tableau": new Map()
  },
  "outposts": {
    "deck": outpost_cards,
    "tableau": new Map()
  },
  "stars": {
    "deck": star_cards,
    "tableau": new Map()
  }
};

export {gameData, discard, move};;