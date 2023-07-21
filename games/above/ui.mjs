/** 
 * display the card.
 * @param {Object} card - the card object.
 * @returns {String} an HTML template string.
 */
const Card = function (card) {
  let cost = `$${card.cost}`;
  const benefit = `${card.benefit}`;
  const vp = (card.vp)?`[${card.vp} vp] `:"";

  return `${cost} ${vp}Benefit: ${benefit}`;
}; // end Card.

/** 
 * Deck of cards.
 * @param {Map} cards - map of cards.
 * @param {String} type - type of cards.
 * @returns {String} an HTML template string.
 */
const Deck = function (cards, type) {
  let label = "";
  let options = [];

  switch (type) {
    case "buildings":
      label = "Building card";
      break;
    case "outposts":
      label = "Outpost card";
      break;
    case "keys":
      label = "Key card";
      break;
    case "stars":
      label = "Star card";
      break;
    default:
      // No actions.
  } // end switch type.

  for (let [key, entry] of cards) {
    options.push(`<option value="${key}">${Card(entry)}</option>`);
  } // end for key entry.

  return `
  <label>
    ${label}s: 
    <select>${options.join("")}</select>
  </label>
  <button data-action="move" aria-label="Draw ${label}">Draw</button>`;
}; // end Deck.

/** 
 * List cards.
 * @param {Map} cards - map of cards.
 * @returns {String} an HTML template string.
 */
const List = function (cards) {
  if (cards.size === 0) {
    return `<p>No cards.</p>`
  } // end if.
  
  let items = [];

  for (let [key, entry] of cards) {
    let title = Card(entry);
    items.push(`<li data-key="${key}">${title} <button data-action="discard" aria-label="Discard ${title}">Discard</button></li>`);
  } // end for key entry.

  return `
  <ul>
    ${items.join("")}
  </ul>`;
}; // end List.

/** 
 * Send message.
 * @param {String} message - text message.
 */
const sendMessage = function (message) {
  let el = document.querySelector("#messages");
  el.innerHTML = "";
  setTimeout(function () {
    el.textContent = message;
  }, 100);
}; // end sendMessage.
export {Deck, List, sendMessage};