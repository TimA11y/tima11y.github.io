import {data} from "./data.module.js";

// data variables.
let cardsPlayed = new Map();

// User Interface Variables
let form = document.querySelector("#deck");
let messages = document.querySelector("#messages");
let cards = document.querySelector("#cards");
let hdgHand = document.querySelector("#hdgHand");
let hand = document.querySelector("#hand");
let hdgPlayed = document.querySelector("#hdgPlayed");
let played = document.querySelector("#played");

// Helper Functions.
/** 
 * Creates an option for the combobox based on the card data.
 * @param {number} index - the index value of the card in the data object.
 * @param {object} cardData - the card object.
 * @return {Element} the option element for the combobox. 
*/
let createOption = function (index, cardData) {
  let option = document.createElement("option");
  option.value = index;
  option.textContent = `${cardData.suit} ${cardData.type} [${cardData.points}]`;
  return option;
}; // end createOption function.

/** 
 * Create the card title.
 * @param {object} cardData - the card data.
 * @return {string} the card title.
*/
let createTitle = function (cardData) {
  return `${cardData.suit} ${cardData.type} [${cardData.points}]`;
}; // end createTitle.

/** 
 * Creates the card element from the card data.
 * @param {object} cardData - the card data.
 * @param {number} index - index of the card in the data array.
 * @param {string} nodeType - type of node to contain the card data.
 * @return {Element} returns a card element based on the card data.
 */
let createCard = function (cardData, index, nodeType = "li") {
  let title = createTitle(cardData);
  let card = document.createElement(nodeType);
  card.setAttribute("data-card", index);
  card.innerHTML = `<h2>${title}</h2>`;
  card.innerHTML += `<div>${cardData.ability}</div>`;
  card.innerHTML += `<div class="actions"><button data-action="play" aria-label="Play ${title}">Play</button><button data-action="discard" aria-label="Discard ${title}">Discard</button></div>`;
  return card;
}; // end createCard.

/** 
 * Update the cardsPlayed to keep a count of expeditions launched and joined.
 * @param {number} index - index of the card being played (related to the index in the data variable.)
 * 
*/
let updateCardsPlayed = function (index) {
  if (cardsPlayed.has(index)) { // this type of card has been played before.
    cardsPlayed.set(index, cardsPlayed.get(index) + 1);
    let li = played.querySelector(`[data-played="${index}"]`); // get the list item that contains the info about these cards.
    let button = `<button data-action="decrease" aria-label="Remove ${createTitle(data[index])} card">Remove card</button>`;
    li.innerHTML = `${createTitle(data[index])}: ${cardsPlayed.get(index)} ${button}`;
  } else { // this is the first time this type of card was played.
    cardsPlayed.set(index, 1);
    let li = document.createElement("li"); // create new entry for played area.
    li.setAttribute("data-played", `${index}`);
    let button = `<button data-action="decrease" aria-label="Remove ${createTitle(data[index])} card">Remove card</button>`;
li.innerHTML = `${createTitle(data[index])}: 1 ${button}`;
    played.append(li);
  }
}; // end updateCardsPlayed.

/** 
 * Remove a card from the card count in the played area.
 * @param index - index of the card count to be decreased.
*/
let removeCardsPlayed = function (index) {
  let count = cardsPlayed.get(index);
  count -= 1;

  let li = played.querySelector(`[data-played="${index}"]`);

  // If there are no more cards of this type, remove the card counter.
  if (count <= 0) {
    cardsPlayed.delete(index);
    hdgPlayed.focus();
    li.remove();
    setMessage(`No more ${createTitle(data[index])} cards in the play area.`);
    return;
  } // end if.

  cardsPlayed.set(index, count);
  let button = `<button data-action="decrease" aria-label="Remove ${createTitle(data[index])} card">Remove card</button>`;
  li.innerHTML = `${createTitle(data[index])}: ${count} ${button}`;
  setMessage(`Removed ${createTitle(data[index])} from the play area.`);

}; // end removeCardsPlayed.

/** 
 * Provide messages to inform the user of actions.
 * @param {string} message - the message to be spoken.
*/
let setMessage = function (message) {
  messages.textContent = "";
  setTimeout(function () {
    messages.textContent = message;
  }, 10);
  setTimeout(() => {
    messages.innerHTML = "";
  }, (30000));
}; // end setMessage.

// Setup select control.
data.forEach((card, index) => {
  let option = createOption(index, card);
  cards.append(option);
}); // end forEach.

// Main

form.addEventListener("submit", function (event) {
  let index = cards.value;
  let card = createCard(data[index], index);
  hand.prepend(card);
  setMessage(`${createTitle(data[index])} added to your hand.`);
  event.preventDefault();
}); // end submit form.

hand.addEventListener("click", function (event) {

  let target = event.target;
  // if the target does not have a data-action attribute, ignore this click event.
  if (!target.hasAttribute("data-action")) {
    return;
  } // end if.

    let card = target.closest(`[data-card]`);
    let index = parseInt(card.getAttribute("data-card"));
    let action = target.getAttribute("data-action"); // get the action assigned to the button.


  // process the action.
  switch (action) {
    case "play":
      updateCardsPlayed(index);
      hdgHand.focus();
      card.remove();
      setMessage(`Playing ${createTitle(data[index])}`);
      break;
    case "discard": // discard the card from the hand.
    hdgHand.focus();
      card.remove();
      setMessage(`Discarding ${createTitle(data[index])}`);
      break;
    default:
      // do nothing.
  } // end switch action.

}); // end hand click event.

played.addEventListener("click", function (event) {
  let target = event.target;
  // If a button is not clicked, then ignore this event.
  if (!target.hasAttribute("data-action")) {
    return;
  } // end if

  let li = target.closest(`[data-played]`);
  let index = parseInt(li.getAttribute("data-played"));
    removeCardsPlayed(index);
}); // end played click event.
