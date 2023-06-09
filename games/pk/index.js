// Import Modules.
import {data} from "./data.mjs";
import { ListPlayers } from "./ui.mjs";;
import {store, component} from "./reef.es.min.js";

// User Interface variables
const App = document.querySelector("#App");

// Setup User Interface
App.innerHTML = ListPlayers(data);

// Main
App.addEventListener("click", function (event) {
  if (event.target.nodeName !== "BUTTON") {
    return;
  } // end if.

  let playerNumber = event.target.closest("[data-player]").getAttribute("data-player");
  let action = event.target.closest("[data-action]").getAttribute("data-action");

  switch (action) {
    case "add":
      // Add Round Total to Total.
      break;
    case "edit":
      let newName = event.target.parentNode.querySelector(`input[type="text"]`).value;
      data[playerNumber].name = newName;
      data[playerNmumber].mode = 0;
      // Change the player name.
      break;
    case "rename":
      data[playerNumber].mode = 1;
      break;
    default:
    // Do nothing.
  } // end switch action.

  App.innerHTML = ListPlayers(data);

}); // end click event.