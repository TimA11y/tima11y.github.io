/** 
 * Return the string as an integer.
 * @param {String} value - The string value.
 * @returns {Number} The integer.
 */
function convert (value) {
  return parseInt(value) || 0;
} // end convert.

/** 
 * Determine if the word needs to be a plural and return the string.
 * @param {Number} value - the value that will help determine if the word needs to be a plural.
 * @param {String} word - The word that might need to become a plural.
 * @returns {String} Either the singular or plural of the word.
 */
function isPlural (value, word) {
  // The word should only be singular if there is just 1.
  if (value === 1) {
    return word;
  } // end if.

  return `${word}s`;
} // end isPlural.

/** 
 * Get the quest card cost and return the value as a string.
 * @param {Object} card - the card object.
 * @returns {String}} A string of the quest card cost.
 */
function getQuestCost (card) {
  let cost = [];
  let clericValue = convert(card["cost-cleric"]);
  let mageValue = convert(card["cost-mage"]);
  let rogueValue = convert(card["cost-rogue"]);
  let warriorValue = convert(card["cost-warrior"]);
  let anyValue = convert(card["cost-any"]);
  let goldValue = convert(card["cost-gold"]);

  if (clericValue > 0) {
    cost.push(`${clericValue} ${isPlural(clericValue, "cleric")}`);
  } // end if.

  if (mageValue > 0) {
    cost.push(`${mageValue} ${isPlural(mageValue, "mage")}`);
  } // end if.

  if (rogueValue > 0) {
    cost.push(`${rogueValue} ${isPlural(rogueValue, "rogue")}`);
  } // end if.

  if (warriorValue > 0) {
    cost.push(`${warriorValue} ${isPlural(warriorValue, "warrior")}`);
  } // end if.

  if (anyValue > 0) {
    cost.push(`${anyValue} any`);
  } // end if.

  if (goldValue > 0) {
    cost.push(`${goldValue} gold`);
  } // end if.

  return cost.join(", ");
} // end getQuestCard.

/** 
 * Get  the quest card rewards.
 * @param {Object} card - The card data as an object.
 * @returns {String} The quest card reward
 */
function getQuestReward (card) {
  let reward = [];

  let vpValue = convert(card["vp"]);
  let clericValue = convert(card["reward-cleric"]);
  let mageValue = convert(card["reward-mage"]);
  let rogueValue = convert(card["reward-rogue"]);
  let warriorValue = convert(card["reward-warrior"]);
  let anyValue = convert(card["reward-any"]);
  let goldValue = convert(card["reward-gold"]);
  let intrigueValue = convert(card["reward-intrigue"]);
  let questValue = convert(card["reward-quest"]);
  let corruptionValue = convert(card["reward-corruption"]);

  reward.push(`${vpValue} vp`);
  if (clericValue > 0) {
    reward.push(`${clericValue} ${isPlural(clericValue, "cleric")}`);
  } // end if.

  if (mageValue > 0) {
    reward.push(`${mageValue} ${isPlural(mageValue, "mage")}`);
  } // end if.

  if (rogueValue > 0) {
    reward.push(`${rogueValue} ${isPlural(rogueValue, "rogue")}`);
  } // end if.

  if (warriorValue > 0) {
    reward.push(`${warriorValue} ${isPlural(warriorValue, "warrior")}`);
  } // end if.

  if (anyValue > 0) {
    reward.push(`${anyValue} any`);
  } // end if.

  if (goldValue > 0) {
    reward.push(`${goldValue} gold`);
  } // end if.

  if (intrigueValue > 0) {
    reward.push(`${intrigueValue} intrigue`);
  } // end if.

  if (questValue > 0) {
    reward.push(`${questValue} quest`);
  } // end if.

  if (corruptionValue !== 0) {
    reward.push(`${corruptionValue} corruption`);
  } // end if.

  if (card["misc."].length > 0) {
    reward.push("special");
  } // end if.

  return reward.join(", ");
} // end getQuestReward.

/** 
 * Get the quest card title.
 * @param {Object} card - the card data.
 * @returns {String} the quest card title as a string.
 */
function getQuestTitle (card) {
  return `${card["Quest Name"]} [${card["Quest Type"]}]`;
} // end getQuestTitle.

/** 
 * Find a specific quest or intrigue card and returns its index. Return -1 if the card is not present.
 * @param {Array} cards - the array of cards to search.
 * @param {String} name - The name of the card.
 * @param {String} type - type of card (quest or intrique).
 * @returns {Integer} The location of the card in the array.
 */
function findCard (cards, name, type) {
  let list = [];

  for (let card of cards) {
    switch (type) {
      case "intrigue":
        list.push(card["Name"]);
        break; 
      case "quest":
        list.push(card["Quest Name"]);
        break;
      default:
        // No action.
    } // switch type
  } // end for card.

  return list.indexOf(name);
} // end findCard.

export {convert, isPlural, getQuestCost, getQuestReward, getQuestTitle, findCard};