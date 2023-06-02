//jshint esversion: 6
"use strict";

// Import modules.
import {gameState} from "./data.module.js";
import {createButtonList, createCardList} from "./ui.module.js";
import {findPlanet, findPlanetIndex} from "./utility.module.js";

// User Interface Variables
let deck = document.querySelector("#deck");
let tableau = document.querySelector("#tableau");
let colonies = document.querySelector("#colonies");
let discards = document.querySelector("#discards");

// Main

document.addEventListener("click", function (event) {
  // If the target is not a button, then end the event handler.
  if (event.target.nodeName !== "BUTTON") {
    return;
  } // end if.

  if (event.target.getAttribute("aria-expanded")) {
    let currentState = event.target.getAttribute("aria-expanded");
    let newState = "";
    if (currentState === "true") {
      newState = "false";
    } else {
      newState = "true";
    }
    event.target.setAttribute("aria-expanded", newState);
  } // end if.
}); // end click event.


gameState.tableau = gameState.deck.splice(10,4);
gameState.colonies = gameState.deck.splice(8,4);
gameState.discards = gameState.deck.splice(14,5);
let planetName = gameState.discards[2].name;
alert(findPlanet(gameState, planetName));