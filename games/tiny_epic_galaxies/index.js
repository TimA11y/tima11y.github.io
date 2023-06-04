//jshint esversion: 6
"use strict";

// Import modules.
import {render} from "./reef.es.min.js";
import { gameState } from "./data.module.js";;
import { createButtonList, createCardList, setFocus } from "./ui.module.js";
import { findPlanet, findPlanetIndex, comparePlanets } from "./utility.module.js";

// User Interface Variables
let deck = document.querySelector("#deck");
let tableau = document.querySelector("#tableau");
let colonies = document.querySelector("#colonies");
let discards = document.querySelector("#discards");

// Main
render(deck, createButtonList(gameState.deck, "deck"));
render(tableau, createCardList(gameState.tableau, "tableau"));
render(colonies, createCardList(gameState.colonies, "colonies"));
render(discards, createButtonList(gameState.discards, "discards"));

// Set initial focus.
document.querySelector("button").focus();
document.addEventListener("click", function (event) {
  let button = event.target.closest("button");
  if (!button) {
    return;
  } // end if.

  // If the button has aria-expanded, toggle the state.
  let toggle = button.getAttribute("aria-expanded");
  if (toggle) {
    if (toggle === "true") {
      toggle = "false";
    } else {
      toggle = "true";
    } // end if else.
    button.setAttribute("aria-expanded", toggle);
    return;
  } // end if.

  // Move the planet around.
  let planetName = button.getAttribute("data-planet");
  let origin = findPlanet(planetName, gameState);
  let originIndex = findPlanetIndex(planetName, gameState[origin]);
  let destination = button.getAttribute("data-moveto");
    let temp = gameState[origin].splice(originIndex, 1)[0];
  gameState[destination].push(temp);

  // Sort the lists of planets alphabetically.
  gameState[destination].sort(comparePlanets);

  // Render the changed interface.
  render(deck, createButtonList(gameState.deck, "deck"));
  render(tableau, createCardList(gameState.tableau, "tableau"));
  render(colonies, createCardList(gameState.colonies, "colonies"));
  render(discards, createButtonList(gameState.discards, "discards"));

  // Set the keyboard focus.
  setFocus(origin, originIndex, gameState);

}); // end click event.