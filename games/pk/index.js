// Import Modules.
import {data} from "./data.mjs";
import { ListPlayers, ManageFocus } from "./ui.mjs";;
import {render} from "./reef.es.min.js";

// User Interface variables
const App = document.querySelector("#App");

// Main
App.addEventListener("click", function (event) {
  // Return if the element clicked is not a button.
  if (event.target.nodeName !== "BUTTON") {
    return;
  } // end if.

  let playerNumber = parseInt(event.target.closest("[data-player]").getAttribute("data-player"));
  let action = event.target.closest("[data-action]").getAttribute("data-action");
  switch (action) {
    case "add": // Add the round total to the game total.
      let value = parseInt(data[playerNumber].round) || 0;
      data[playerNumber].total += value;
      data[playerNumber].round = 0;
      document.querySelector(`[data-player="${playerNumber}"] input[type="number"]`).value = 0;
     break;
    case "edit":
      data[playerNumber].mode = 0;
      break;
    case "rename":
      data[playerNumber].mode = 1;
      break;
    default:
      // Do nothing.
  } // end switch action.

  render(App, ListPlayers(data));

  ManageFocus(playerNumber, action);
  
}); // end click event.

App.addEventListener("input", function (event) {
  // If this is not an input type text or number, return immediately.
  if (!event.target.closest(`[type="number"],[type="text"]`)) {
    return;
  } // end if.

  let playerNumber = parseInt(event.target.closest(`[data-player]`).getAttribute("data-player"));
  let type = event.target.closest("input").type;
  let value = event.target.closest("input").value;
  switch (type) {
    case "number":
      data[playerNumber].round = value;
      break;
    case "text":
      data[playerNumber].name = value;
      break;
    default:
      // No actions.
  } // end switch type.
}); // end input event.

render(App, ListPlayers(data));
