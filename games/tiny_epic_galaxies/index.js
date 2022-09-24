//jshint esversion: 6
"use strict";

// Card data.
const planets = [{"name":"Andellouxian-6","track":"5","conquest":"Economy","resource":"Culture","victory_points":"5","colonization":"Displace 1 of your orbiting ships,  acquire energy/culture = ship's level","note":"Your choice of one resource"},{"name":"Aughmoore","track":"6","conquest":"Diplomacy","resource":"Energy","victory_points":"7","colonization":"Acquire culture for every ship landed in your galaxy","note":""},{"name":"BSW-10-1","track":"5","conquest":"Diplomacy","resource":"Energy","victory_points":"5","colonization":"Regress one of your ships -1, then advance another one of your ships +1","note":"Can't advance if you can't regress"},{"name":"Birkomius","track":"2","conquest":"Diplomacy","resource":"Culture","victory_points":"1","colonization":"If you are followed on this turn, acquire 1 culture per follow","note":""},{"name":"Bisschop","track":"2","conquest":"Economy","resource":"Energy","victory_points":"1","colonization":"If you are followed on this turn, acquire 1 energy per follow","note":""},{"name":"Brumbaugh","track":"4","conquest":"Diplomacy","resource":"Energy","victory_points":"3","colonization":"Spend 2 energy to regress 2 enemy ships by -1","note":""},{"name":"CLJ-0517","track":"3","conquest":"Economy","resource":"Energy","victory_points":"2","colonization":"Steal 1 culture from another player (only once per turn)","note":""},{"name":"Drewkaiden","track":"2","conquest":"Economy","resource":"Culture","victory_points":"1","colonization":"Advance + 1 diplomacy","note":""},{"name":"Gleam-Zanier","track":"5","conquest":"Diplomacy","resource":"Energy","victory_points":"5","colonization":"Acquire 2 energy all other players acquire 1 energy","note":""},{"name":"Gort","track":"6","conquest":"Economy","resource":"Energy","victory_points":"7","colonization":"Move one of your ships to another colony track at an equal level","note":""},{"name":"Gyore","track":"6","conquest":"Economy","resource":"Culture","victory_points":"7","colonization":"Set 1 inactive die to a face of your choice","note":"Only on your turn"},{"name":"Helios","track":"3","conquest":"Diplomacy","resource":"Culture","victory_points":"2","colonization":"Discard an un-occupied planet in the middle and replace it with a new planet","note":"No ships may be on or in orbit"},{"name":"Hoefker","track":"3","conquest":"Economy","resource":"Culture","victory_points":"2","colonization":"Spend 1 energy to acquire 2 culture","note":""},{"name":"JAC-110912","track":"5","conquest":"Economy","resource":"Culture","victory_points":"5","colonization":"Acquire 2 culture all other players acquire 1 culture","note":""},{"name":"Jakks","track":"2","conquest":"Diplomacy","resource":"Culture","victory_points":"1","colonization":"Acquire 1 culture","note":""},{"name":"Jorg","track":"4","conquest":"Diplomacy","resource":"Culture","victory_points":"3","colonization":"Spend 2 culture to regress 1 enemy ship by -2","note":""},{"name":"K-Widow","track":"6","conquest":"Economy","resource":"Culture","victory_points":"7","colonization":"Regress an enemy ship -1","note":"Can't move below start"},{"name":"La-Torres","track":"3","conquest":"Diplomacy","resource":"Culture","victory_points":"2","colonization":"Steal 1 energy from another player (only once per turn)","note":""},{"name":"Leandra","track":"2","conquest":"Diplomacy","resource":"Energy","victory_points":"1","colonization":"Advance +1 economy","note":""},{"name":"Lureena","track":"3","conquest":"Economy","resource":"Culture","victory_points":"2","colonization":"Immediately upgrade your empire, you may spend energy and/or culture","note":""},{"name":"MJ-120210","track":"3","conquest":"Diplomacy","resource":"Energy","victory_points":"2","colonization":"Acquire 2 energy","note":""},{"name":"Maia","track":"5","conquest":"Diplomacy","resource":"Culture","victory_points":"5","colonization":"Discard 2 inactive dice, acquire 2 energy and 2 culture","note":"Only on your turn"},{"name":"Mared","track":"3","conquest":"Economy","resource":"Energy","victory_points":"2","colonization":"If your empire level is the lowest, upgrade your empire for 1 less energy/culture","note":"Not allowed if tied for lowest"},{"name":"Nagato","track":"4","conquest":"Economy","resource":"Energy","victory_points":"3","colonization":"Spend 1 culture to move 2 of your ships (only once per turn)","note":"Can't move one ship twice in a row"},{"name":"Nakagawakozi","track":"4","conquest":"Diplomacy","resource":"Energy","victory_points":"3","colonization":"Spend 2 energy to advance +2 economy","note":""},{"name":"Nibiru","track":"6","conquest":"Diplomacy","resource":"Culture","victory_points":"7","colonization":"Enemies must pay 2 culture per follow this turn","note":"Only on your turn"},{"name":"Omicron Fenzi","track":"4","conquest":"Diplomacy","resource":"Culture","victory_points":"3","colonization":"Convert any number of energy into culture","note":""},{"name":"Padraigin-3110","track":"4","conquest":"Economy","resource":"Culture","victory_points":"3","colonization":"Spend 2 culture to advance +2 diplomacy","note":""},{"name":"Pembertonia-Major","track":"4","conquest":"Economy","resource":"Energy","victory_points":"3","colonization":"Convert any number of culture into energy","note":""},{"name":"Piedes","track":"6","conquest":"Economy","resource":"Energy","victory_points":"7","colonization":"Repeat the action on an already activated die","note":""},{"name":"Sargus-36","track":"5","conquest":"Diplomacy","resource":"Culture","victory_points":"5","colonization":"Pay 1 energy to a player to utilize one of their colonized planets","note":""},{"name":"Shouhua","track":"6","conquest":"Diplomacy","resource":"Energy","victory_points":"7","colonization":"Advance a ship +1","note":""},{"name":"Terra-Bettia","track":"6","conquest":"Diplomacy","resource":"Energy","victory_points":"7","colonization":"Other players advance a ship +1, then you advance a ship +2","note":""},{"name":"Tifnod","track":"2","conquest":"Economy","resource":"Culture","victory_points":"1","colonization":"Regress 1 enemy ship by 1 diplomacy","note":"Can't move below start"},{"name":"Umbra-Forum","track":"4","conquest":"Economy","resource":"Culture","victory_points":"3","colonization":"Utilize the action of an un-colonized planet","note":""},{"name":"Vici-KS156","track":"2","conquest":"Economy","resource":"Energy","victory_points":"1","colonization":"Acquire 1 energy","note":""},{"name":"Vizcarra","track":"2","conquest":"Diplomacy","resource":"Energy","victory_points":"1","colonization":"Regress 1 enemy ship by 1 economy","note":"Can't move below start"},{"name":"Walsfeo","track":"5","conquest":"Economy","resource":"Energy","victory_points":"5","colonization":"Pay 1 culture to a player to utilize one of their colonized planets","note":""},{"name":"Zalax","track":"3","conquest":"Diplomacy","resource":"Culture","victory_points":"2","colonization":"Reroll any number of your inactive dice","note":"Only on your turn"},{"name":"Zavodnick","track":"5","conquest":"Economy","resource":"Energy","victory_points":"5","colonization":"Perform any 1 action; all other players may follow that action for free (only once per turn)","note":""}];

// User Interface Variables.
const form = document.querySelector("form");
const listOfPlanets = document.querySelector("#listOfPlanets");
const availablePlanets = document.querySelector("#availablePlanets");
const claimedPlanets = document.querySelector("#claimedPlanets");
const messanger = document.querySelector("#messanger");

// Setup select list of planets.
planets.forEach((planet, index) => {
  let option = document.createElement("option");
  option.text = planet.name;
  option.value = index;
  listOfPlanets.appendChild(option);
}); // end forEach planet.

// UI logic.
const sendMessage = (text) => {
  messanger.innerHTML = "";
  messanger.innerHTML = `<div>${text}</div>`;
}; // end sendMessage.


const cardActions = (event) => {
  const action = event.target.getAttribute("data-action");
  const actions = event.target.parentNode;
  const card = actions.parentNode;
  switch (action) {
    case "claim":
      claimedPlanets.appendChild(card);
      actions.querySelector(`[data-action="claim"]`).remove();
      sendMessage(`You  claim ${card.querySelector("h3").textContent}.`);
    break;
    case "discard":
      sendMessage(`Planet ${card.querySelector("h3").textContent} discarded.`);
      card.remove();
    break;
    default:
  } // end switch action.
}; // end cardActions.

const createCard = (planet) => {
  const card = document.createElement("li");
  card.innerHTML = `
  <h3>${planet.name} [${planet.victory_points} vp]</h3>
  <div>Resource: ${planet.resource}</div>
  <div>Conquest: ${planet.conquest} ${planet.track}</div>
  <div>${planet.colonization}</div>
  <div>Notes: ${planet.note}</div>
  <div id="actions">
    <button data-action="claim">Claim ${planet.name}</button>
    <button data-action="discard">Discard ${planet.name}</button>
  </div>`;
  card.addEventListener("click", cardActions);	
  return card;
}; // end createCard.


// Main.
form.addEventListener("submit", (event) => {
  const selectedPlanet = listOfPlanets.value;
  const card = createCard(planets[selectedPlanet]);
  availablePlanets.appendChild(card);
  sendMessage(`Planet ${planets[selectedPlanet].name} added to available planets.`);
  event.preventDefault();
}); // end form submit.