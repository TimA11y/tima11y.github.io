// Import modules.
import {gameData, discard, move} from "./data.mjs";
import {Deck, List, sendMessage} from "./ui.mjs";
import {render} from "./reef.es.min.js";

// User Interface variables
const starDeck = document.querySelector(`[data-type="stars"] [data-location="deck"]`);
const starTableau = document.querySelector(`[data-type="stars"] [data-location="tableau"]`);
const keyDeck = document.querySelector(`[data-type="keys"] [data-location="deck"]`);
const keyTableau = document.querySelector(`[data-type="keys"] [data-location="tableau"]`);
const buildingDeck = document.querySelector(`[data-type="buildings"] [data-location="deck"]`);
const buildingTableau = document.querySelector(`[data-type="buildings"] [data-location="tableau"]`);
const outpostDeck = document.querySelector(`[data-type="outposts"] [data-location="deck"]`);
const outpostTableau = document.querySelector(`[data-type="outposts"] [data-location="tableau"]`);

render(starDeck, Deck(gameData.stars.deck, "stars"));
render(starTableau, List(gameData.stars.tableau));
render(keyDeck, Deck(gameData.keys.deck, "keys"));
render(keyTableau, List(gameData.keys.tableau, "keys"));
render(buildingDeck, Deck(gameData.buildings.deck, "buildings"));
render(buildingTableau, List(gameData.buildings.tableau, "buildings"));
render(outpostDeck, Deck(gameData.outposts.deck, "outposts"));
render(outpostTableau, List(gameData.outposts.tableau, "outposts"));


// Main
document.addEventListener("click", function (event) {
  let button = event.target;

  if (!button.closest("button")) {
    return;
  } // end if.

  let type = button.closest("[data-type]").getAttribute("data-type");
  let location = button.closest("[data-location]").getAttribute("data-location");
  let action = button.closest("[data-action]").getAttribute("data-action");
  let key;

  if (location === "deck") {
    key = button.parentNode.querySelector("select").value;
  } else {
    key = button.closest("[data-key").getAttribute("data-key");
  } // end if.

  switch (type) {
    case "stars":
      switch (action) {
        case "discard":
          discard(gameData.stars, key);
          break;
        case "move":
          move(gameData.stars, key);
          break;
       default:
        // No actions.
      } // end switch action.
      break;
    case "keys":
      switch (action) {
        case "discard":
          discard(gameData.keys, key);
          break;
        case "move":
          move(gameData.keys, key);
          break;
        default:
          // No actions.
      } // end switch action.
      break;
    case "buildings":
      switch(action) {
        case "discard":
          discard(gameData.buildings, key);
          break;
        case "move":
          move(gameData.buildings, key);
          break;
        default:
          // No actions.
      } // end siwtch action.
      break;
    case "outposts":
      switch (action) {
        case "discard":
          discard(gameData.outposts, key);
          break;
        case "move":
          move(gameData.outposts, key);
          break;
        default:
          // No actions.
      } // end switch action.
      break;
    default:
      // No actions.
  } // end switch type.

  render(starDeck, Deck(gameData.stars.deck, "stars"));
render(starTableau, List(gameData.stars.tableau));
render(keyDeck, Deck(gameData.keys.deck, "keys"));
render(keyTableau, List(gameData.keys.tableau, "keys"));
render(buildingDeck, Deck(gameData.buildings.deck, "buildings"));
render(buildingTableau, List(gameData.buildings.tableau, "buildings"));
render(outpostDeck, Deck(gameData.outposts.deck, "outposts"));
render(outpostTableau, List(gameData.outposts.tableau, "outposts"));

sendMessage(`${action} ${type} card.`);


}); // end click event listener.
