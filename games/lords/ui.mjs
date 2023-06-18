import { getQuestCost, getQuestReward, getQuestTitle} from "./utils.mjs";

/** 
 * Create button.
 * @param {String} label - visible label.
 * @param {String} name - name of the card.
 * @param {String} type - card type.
 * @param {String} moveTo - Where this button will move the card to.
 * @param {String} accLabel - accessible label.
 */
function Button (label, name, type, moveTo, accLabel = "") {
  let accessibleLabel = "";
  if (accLabel.length > 0) {
    accessibleLabel = `aria-label="${accLabel}"`;
  }

  return `<button data-type="${type}" data-moveTo="${moveTo}"${accessibleLabel}>
    ${label}
  </button>`;
} // end Button.

/** 
 * Create Intrigue card.
 * @param {Object} card - the intrigue card data.
 * @param {String} location - the location of the card.
 * @returns {String} an HTML template string.
 * 
 */
function IntrigueCard (card, location) {
  let name = card["Name"];
  let type = card["intrigue type"];
  let rules = card["rules"];
  let buttons = [];

  switch (location) {
    case "hand":
      buttons = Button("Play", name, "intrigue", "played", `Play ${name}`);
    case "played":
      buttons += Button("Discard", name, "intrigue", "discard", `Discard ${name}`)
      break;
    default:
      // No button actions.
  } // end switch location.

  return `
  <div class="card intrigue" data-name="${name}">
    <h3>${name}</h3>
    <div class="type">${type}</div>
    <div class="rules">${rules}</div>
    <div class="actions">
    ${buttons}
    </div>
  </div>`;
} // end IntrigueCard.

/** 
 * Create Quest card.
 * @param {Object} card - the quest card data.
 * @param {String} location - the location of the card.
 * @returns {String} an HTML template string
 */
function QuestCard (card, location) {
  let buttons = "";

  switch (location) {
    case "hand":
      buttons = Button("Play", name, "quest", "played", `Play ${card["Quest Name"]}`);
    case "played":
      buttons += Button("Discard", name, "quest", "discard", `Discard ${card["Quest Name"]}`)
      break;
    default:
      // No actions.
  } // end switch.

  return `
  <div class="card quest" data-name="${card["Quest Name"]}">
    <h3>${getQuestTitle(card)}</h3>
    <div class="reward">Rewards: ${getQuestReward(card)}</div>
    <div class="cost">Cost: ${getQuestCost(card)}</div>
    <div class="misc">${card["misc."]}</div>
    <div class="actions">${buttons}</div>
  </div>`;
} // end QuestCard.

/** 
 * List all the cards.
 * @param {Array} cards - an array of card objects.
 * @param {String} type - type of cards to display (quest or intrigue.)
 * @param {String} location - where the cards will be displayed.
 * @returns {String} an HTML template string.
 */
function DisplayCards (cards, type, location) {
  // Return message if there are no cards.
  if (cards.length === 0) {
    return `<p>No cards</p>`;
  } // end if.

  let list = [];

  for (let card of cards) {
    switch (type) {
      case "intrigue":
        list.push(IntrigueCard(card, location));
        break;
      case "quest":
        list.push(QuestCard(card, location));
        break;
      default:
        // Display no cards.
    } // end switch type
  } // end for card.

  return list.join("");
} // end DisplayCards.

/** 
 * Create a select widget from a list of cards.
 * @param {Array} cards - the array of cards.
 * @param {String} type - the type of cards (quest or intrigue).
 * @returns {String} an HTML template.
 */
function Select (cards, type) {
  let options = [];

  for (let card of cards) {
    let value = "";
    switch (type) {
      case "intrigue":
        options.push(`<option>${card["Name"]}</option>`);
        break;
      case "quest":
        options.push(`<option>${card["Quest Name"]}</option>`);
        break;
      default:
        // Take no action.
    } // end switch type.
  } // end for card.

  return `
  <select data-type="${type}">
    ${options.join("")}
  </select>`;
} // end Select.

/** 
 * Display messages.
 * @param {String} message - the message to display.
 */
function sendMessage (message) {
  messages.innerHTML = "";
  messages.textContent = message;  
} // end sendMessage.

export {IntrigueCard, QuestCard, DisplayCards, Select, sendMessage};