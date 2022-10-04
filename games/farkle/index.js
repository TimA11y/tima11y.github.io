// user Interface variables.
let frmHowMany = document.querySelector("#frmHowMany");
let numPlayers = document.querySelector("#numPlayers");
let frmPlayerNames = document.querySelector("#frmPlayerNames");
let listPlayers = document.querySelector("#listPlayers");
let frmScoresheet = document.querySelector("#frmScoresheet");
let scoresheet = document.querySelector("#scoresheet");

// Data variables.
let data = {
  "number": 4,
  "players": []
};

// Helper functions.
let showPlayerNames = function () {
  for (let i = 1, max = data.number; i <= max; i++) {
    let div = document.createElement("div");
    div.innerHTML = `<label>Player ${i}: <input type="text" value="Player ${i}"></label>`;
    listPlayers.append(div);
  } // end for i.

  frmPlayerNames.className = "";
  listPlayers.querySelector(`[type="text"]`).focus();
  event.preventDefault();
}; // end showPlayerNames.

let showScoresheet = function () {
  for (let player of data.players) {
    let tr = document.createElement("tr");
    tr.innerHTML = `<th scope="row">${player.name}</th><td><input type="number" value="0" aria-label="Current score ${player.name}"><button aria-label="Add to ${player.name} total" data-action="add">Add</button></td><td data-role="total">0</td>`;
    scoresheet.append(tr);
  } // end for players.

  frmScoresheet.className = "";
}; // end showScoresheet.

// User Interface setup.

// Main.
frmHowMany.addEventListener("submit", function (event) {
  data.number = parseInt(numPlayers.value);
  frmHowMany.className = "hidden";
  showPlayerNames();
}); // end submit frmHowMany.

frmPlayerNames.addEventListener("submit", function (event) {
  let players = listPlayers.querySelectorAll(`[type="text"]`);
  for (let player of players) {
    data.players.push({
      "name": player.value
    });
  } // end for players

  listPlayers.innerHTML = "";
  showScoresheet();
  frmPlayerNames.className = "hidden";
  event.preventDefault();
}); // end frmPlayerNames submit.

scoresheet.addEventListener("click", function (event) {
  if (!event.target.hasAttribute("data-action")) {
    return;
  }

  
  let row = event.target.closest("tr");
  let numCurrent = row.querySelector(`[type="number"]`);
  let numTotal = row.querySelector(`[data-role="total"]`);
  let current = parseInt(numCurrent.value);
  let total = parseInt(numTotal.textContent);
  total = total + current;
  numTotal.textContent = total;
  numCurrent.value = 0;

  event.preventDefault();
}); // end click add button.