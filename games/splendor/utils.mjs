import { game_data } from "./data.mjs";

/** 
 * Change gem symbol to gem color.
 * @param {String} gemSymbol - the gem symbol.
 * @returns {String} returns the corresponding gem color.
 */
const convertGemSymbol = function (gemSymbol)  {
  switch (gemSymbol) {
    case "b":
      return "blue";
    case "g":
      return "green";
    case "k":
      return "black";
    case "r":
      return "red";
    case "w":
      return "white";
    default:
      return "";
  } // end switch gemSymbol.
}; // end convertGemSymbol.

/** 
 * Parse the bonus string.
 * @param {String} bonusString - the bonus string.
 * @returns {Object} An object containing the bonus information.
 */
const parseBonus = function (bonusString) {
  let gem = "";
  let v = 0;
  let rx = /([bgkrw]|\d+)/g;
  let matchResults = bonusString.match(rx);
  let result = {};

  for (let gemSymbol of matchResults) {
    if ("rgbkw".includes(gemSymbol)) {
      result.gem = convertGemSymbol(gemSymbol);
    } else {
      result.vp = parseInt(gemSymbol) || 0;
    } // end if.
  } // end for gemSymbol

  return result;
}; // end parseBonus.
/** 
 * Parse the cost string.
 * @param {String} costString - the cost string.
 * @returns {Array} the array of the costs.
 */
const parseCost = function (costString) {
  let rx = /(\d+[rgbkw])/g;
  let result = [];

  for (let gem of costString.match(rx)) {
    let number = parseInt(gem) || 0;
    let type = convertGemSymbol(gem.at(-1));
    result.push([number, type]);
  } // end for gem.

  return result;
}; // end parseCost.



/** 
 * Prase a command.
 * @param {String} cmd - the string containing the command.
 * @returns {Object} The object containing the parsed command.
 */
const parseCommand = function (cmd) {
  let cmdString = cmd.trim().toLowerCase().split(" ");;
  let action = cmdString[0] || "";
  let type = cmdString[1] || "";
  let option1 = cmdString[2] || "";
  let option2 = cmdString[3] || "";
  let cost = "";
  let bonus = "";
  let misc = "";

  // Action
  // Normalize action string.
  if (action === "a") {
    action = "add";
  } // end if.

  if (action === "b") {
    action = "buy";
  } // end if.

  if (action === "d" || action === "dis") {
    action = "discard";
  } // end if.

  if (action === "r" || action === "res") {
    action = "reserve";
  } // end if.

  // Type
  // Normalize type string.
  if (type === "a" || type === "art" || type === "artisans") {
    type = "artisan";
  } // end if.

  if (type === "m" || type === "min" || type === "mines") {
    type = "mine";
  } // end if.

  if (type === "nob" || type === "nobles" || type === "n") {
    type = "noble";
  } // end if.

  if (type === "p" || type === "play") {
    type = "played";
  } // end if.

  if (type === "r" || type === "res" || type === "reserves") {
    type = "reserve";
  } // end if.

  if (type === "tra" || type === "transports" || type === "t") {
    type = "transport";
  } // end if.

  // Parse and normalize option1, option2.
  let key1 = option1.substring(0, 1);
  let key2 = option2.substring(0, 1);

  // Normalize option1.
  if (key1 === "$") {
    cost = parseCost(option1.substring(1));
  } // end if.

  if (key1 === "+") {
    bonus = parseBonus(option1.substring(1));
  } // end if.

  if (/\d/.test(key1)) {
    misc = parseInt(option1);
  } // end if.

  // Option2
  if (key2 === "$") {
    cost = parseCost(option2.substring(1));
  } // end if.

  if (key2 === "+") {
    bonus = parseBonus(option2.substring(1));
  } // end if.

  return {
    "action": action,
    "type": type,
    "cost": cost,
    "bonus": bonus,
    "misc": misc
  }
}; // end parseCommand.

/** 
 * Add a new card to the tableau.
 * @param {Object} commandObject - The command object.
 * @param {Object} game_data - the game data.
 * @returns {Boolean} Returns true if succcessful or false if fails.
 */
const add = function (commandObject) {
  let key = commandObject.type;

  // Make sure the card is added to a valid location.
  if (!Object.keys(game_data).includes(key)) {
    return false;
  } // end if.

  game_data[key].push({
    "cost": commandObject.cost,
    "bonus": commandObject.bonus
  });
  
  return true;
}; // end add.

/** 
 * Buy a card.
 * @param {Object} commandObject - a command object.
 * @param {Object} game_data - the game data.
 * @returns Return true if successful, false if it fails.
 */
const buy = function (commandObject, game_data) {
  let validKeys = ["noble", "artisan", "transport", "mine", "reserve"];
  let key = commandObject.type;
  let index = commandObject.misc - 1;

  if (!validKeys.includes(key)) {
    return false;
  } // end if.

  // Check to make sure the card exists.
  if (!game_data[key][index]) {
    return false;
  } // end if.

  let item = game_data[key].splice(index, 1)[0]

  game_data.purchase.push(item);

  return true;
}; // end buy.;

/** 
 * Discard card.
 * @param {Object} commandObject - the command object.
 * @param {object} game_data - the game data.
 * @returns true if successful, false if it fails.
 */
const discard = function (commandObject, game_data) {
  let key = commandObject.type;
  let index = commandObject.misc - 1;

  // Make sure it is a valid location.
  if (!Object.keys(game_data).includes(key)) {
    return false;
  } // end if.

  // Make sure the card exists.
  if (!game_data[key][index]) {
    return false;
  } // end if.

  game_data[key].splice(index, 1);

  return true;
}; // end discard.

/** 
 * Reserve a card.
 * @param {Object} commandObject - the command object.
 * @param {Object} game_data - the game data.
 * @returns true if successful, false if it fails.
 */
const reserve = function (commandObject, game_data) {
  let key = commandObject.type;
  let index = commandObject.misc - 1;

  // Make sure the location is valid.
  if (!Object.keys(game_data).includes(key)) {
    return false;
  } // end if.

  // Check to see the card exists.
  if (!game_data[key][index]) {
    return false;
  } // end if.

  let item = game_data[key].splice(index, 1)[0];
  game_data.reserve.push(item);

  return true;
} // end reserve.

export {parseCommand, add, buy, discard, reserve};