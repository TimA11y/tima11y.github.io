//jshint esversion: 6
"use strict";

// Import modules.
import { gameState } from "./data.module.js";
import { createButtonList, createCardList } from "./ui.module.js";
import { findPlanet, findPlanetIndex } from "./utility.module.js";

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
    return;
  } // end if.

  let planetName = event.target.getAttribute("data-planet");
  let destination = event.target.getAttribute("data-moveto");
  let origin = findPlanet(planetName, gameState);
  let originIndex = findPlanetIndex(planetName, gameState[origin]);

}); // end click event.
