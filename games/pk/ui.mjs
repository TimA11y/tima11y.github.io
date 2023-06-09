/** 
 * Title displaying player name and total score.
 * @param {String} playerName - Player name
 * @param {Integer} total - player's current total score.
 * @returns {String} an HTML template string
 */
const Title = function (playerName, total) {
  return `
  <h1 class="title">
    <button data-action="rename">${playerName}</button> 
    ${total}
  </h1>`;
}; // end Title.

/** 
 * Edit Title - Editing the player name in the title.
 * @param {String} playerName - Player name
 * @returns {String} an HTML template string
 */
const EditTitle  = function (playerName, total) {
  return `
  <h1 class="title">
    <input type="text" max="12" value="${playerName}" aria-label="Change Player Name" />
    <button data-action="edit">Change</button>
  </h1>`;
}; // end Title.

/** 
 * Track and add round total to the player total.
 * @param {String} playerName - Player name
 * @returns {String} an HTML template string.
 */
const RoundTotal = function (playerName) {
  return `
  <div class="roundTotal">
    <input type="number" max="30000" step="100" value="0" aria-label="Round Total ${playerName}">
    <button data-action="add" aria-label="Add ${playerName}'s round total">Add</button>
  </div>`;
}; // end RoundTotal.

/** 
 * Player card.
 * @param {Integer} playerNumber - The number of the player.
 * @param playerName - Player's name.
 * @param {Integer} total - Player's total.
 * @returns {String} an HTML template string.
 */
const PlayerCard = function (playerNumber, playerName, total, mode) {
  return `
  <div class="card" data-player="${playerNumber}">
    ${(mode === 0) ? Title(playerName, total) : EditTitle(playerName)}
    ${RoundTotal(playerName)}
  </div>`;
}; // end PlayerCard.

/** 
 * List all the player cards.
 * @param {Array} players - Array of player objects with player data.
 * @return {String} an HTML template string
 */
const ListPlayers = function (players) {
  return players.map((player, playerNumber) => {
    return PlayerCard(playerNumber, player.name, player.total, player.mode);
  }).join("");
}; // end ListPlayers.

export {ListPlayers};