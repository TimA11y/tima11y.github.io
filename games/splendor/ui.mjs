/** 
 * Display the card contents.
 * @param {Object} card - the card object.
 * @returns {String} an HTML template string
 */
const Card = function (card) {
  let costList = card.cost.map((item) => {
    return item.join(" ");
  }).join(", ");
  let bonusArray = [];

  if (card.bonus.gem) {
    bonusArray.push(card.bonus.gem);
  } // end if.

  if (card.bonus.vp) {
    bonusArray.push(`${card.bonus.vp} vp`);
  } // end if.

  let bonusList = "";
  if (bonusArray.length > 0) {
    bonusList = `<div>Bonus: ${bonusArray.join(" ")}</div>`;
  } // end if.

  return `
  <div>
    <div>Cost: ${costList}</div>
    ${bonusList}
  </div>`;

}; // end Card.

/** 
 * List of Cards.
 * @param {Array} list - list of cards.
 * @returns {String} an HTML string template.
 */
const CardList = function (list) {
  if (list.length === 0) {
    return "<p>No cards.</p>";
  } // end if.

  return `
  <ol>
    ${list.map((item) => {
      return `<li>${Card(item)}</li>`;
    }).join("")}
  </ol>`;
}; // end CardList.

/** 
 * Send message via live region
 * @param {String} - the message.
 * @param {Element} - The node where the string will display.
 */
const sendMessage = function (message, messageNode) {
  messageNode.innerHTML = "";
  setTimeout(function () {
    messageNode.textContent = message;
  }, 75);
}

export {Card, CardList, sendMessage};