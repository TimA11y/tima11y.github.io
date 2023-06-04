// User Interface functions.

/** 
 * Create a button.
 * @param {String} label: The visible label for the button.
 * @param {String} moveto - The location to which to move the card.
 * {String} planet - The name of the planet that will be moved.
 * @param {String} accessibleLabel - The accessible label (uses aria-label).
 */
const createButton = function (label, moveto, planet, accessibleLabel = "") {
    let accLabel = "";
    if (accessibleLabel !== "") {
        accLabel = ` aria-label="${accessibleLabel}"`;
    } // end if.
    return `
    <button data-moveto="${moveto}" data-planet="${planet}"${accLabel}>
        ${label}
    </button>`;
}; // end createButton.

/** 
 * Create a planet card.
 * @param {Object} planet - Object containing the planet data.
 * @param {String} location - The place where the card will be located.
 */
const createCard = function (planet, location) {
    let notes = (planet.note !== "")?`<div>${planet.note}</div>`:"";
    let buttonOptions = "";

    // Add the optional buttons to the card.
    // If tableau, add colonize and discard buttons.
    // If colonies, add discard button only.
    // if anything else, add no buttonOptions.
    switch (location) {
        case "tableau":
            buttonOptions = createButton("Colonize", "colonies", planet.name, `Colonize ${planet.name}`);
        case "colonies":
            buttonOptions = buttonOptions + createButton("Discard", "discards", planet.name, `Discard ${planet.name}`);
        default:
            // add no buttons to the card.
    } // end switch location.

    return `
    <div class="card">
        <h2 class="title">${planet.name} [${planet.victory_points} vp]</h2>
        <div class="body">
            <div>Resource: ${planet.resource}</div>
            <div>Orbit: ${planet.conquest}[${planet.track}]</div>
            <div>${planet.colonization}</div>
            ${notes}
            <div class="actions">${buttonOptions}</div>
        </div>
    </div>`;

}; // end createCard.

/** 
 * Create a list of buttons.
 * @param {Array} list - an array of planet objects.
 * @param {String} location - The location where the card list will be displayed.
 */
const createButtonList = function (list, location) {
    let li = [];
    let moveto = "";

    switch (location) {
        case "deck":
            moveto = "tableau";
            break;
        case "discards":
            moveto = "deck";
            break;
        default:
            // No moveto.
    }

    for (let planet of list) {
        li.push(`<li>${createButton(planet.name, moveto, planet.name)}</li>`);
    } // end for planet

    return `
    <ul class="list ${location}">
        ${li.join("")}
    </ul>`;
}; // end createButtonList.

/** 
 * Create a list of cards.
 * @param {Array} list - a list of planet objects.
 * @param {String} location - location where the cards will be displayed.
 * @returns {String} An HTML template string.
 */
const createCardList = function (list, location) {
    return list.map((planet) => {
        return createCard(planet, location);
    }).join("");
}; // end createCardList.

/** 
 * Set keyboard focus.
 * @param {String} origin - The section that contained the planet before it moved.
 * @param {Integer} originIndex - The planets original location in the array.
 * @param {Object} gameState - The data containing the game state.
 * 
 */
const setFocus = function (origin, originIndex, gameState) {
    let focusSelector = "";
    let focusIndex = originIndex - 1;
    if (gameState[origin].length > 0 && focusIndex < 0) {
        focusIndex = 0;
    } // end if.

    if (focusIndex < 0) {
        // Set the focus to the heading for the section.
        focusSelector = `#hdg${origin.charAt(0).toUpperCase()}${origin.substring(1)}`;
    } else {
        // Set the focus to the button for the previous planet.
        let planetName = gameState[origin][focusIndex].name;
        focusSelector = `[data-planet="${planetName}"]`;
    } // end if else.

    document.querySelector(focusSelector).focus();
}; // end setFocus.

/** 
 * Displays a message for the screen reader to read.
 * @param {String} message - the message to display for a screen reader.
 * @param {String} selector - The CSS selector of where to display the message.
 */
const sendMessage = function (message, selector) {
    let messageNode = document.querySelector(selector);
    setTimeout(function () {
        messageNode.textContent = "";
    }, 500);
    messageNode.textContent = message;
}; // end sendMessage.
export {createButtonList, createCardList, setFocus, sendMessage};