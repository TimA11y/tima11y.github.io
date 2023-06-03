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

export {createButtonList, createCardList};