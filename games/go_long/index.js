import {qb, play, turnover, penalty, sack, kickoff, punt, fieldGoal} from "./helpers.module.js";

// User Interface variables.

let playType = document.querySelector("#play-type");
let result1 = document.querySelector("#result1");
let chkResult1 = document.querySelector("#chkResult1");
let result2 = document.querySelector("#result2");
let chkResult2 = document.querySelector("#chkResult2");
let result3 = document.querySelector("#result3");
let chkResult3 = document.querySelector("#chkResult3");
let bigPlay = document.querySelector("#bigPlay");
let chkBigPlay = document.querySelector("#chkBigPlay");
let messages = document.querySelector("#messages");
let actionButtons = document.querySelector('[data-role="actions"]');

// Helper functions.
let hike = function () {
  let type = qb();
  let value = play();

  playType.textContent = type;
  if (!chkResult1.checked) {
    result1.textContent = `${value.play[0]} yards`;
  } // end if.
  if (!chkResult2.checked) {
    result2.textContent = `${value.play[1]} yards`;
  } // end if.
  if (!chkResult3.checked) {
    result3.textContent = `${value.play[2]} yards`;
  } // end if.
  if (!chkBigPlay.checked) {
    bigPlay.textContent = `${value.bigPlay} yards`;
  } // end if.
  return type;
}; // end Hike.

let resetDowns = function () {
  document.querySelectorAll(`[type="checkbox"]`).forEach((el) => {
    el.checked = false;
  }); // end forEach.
}; // end resetDowns.

let playPenalty = function () {
  let value = penalty();
  messages.innerHTML = `${value.type} called on the ${value.team} for ${value.yardage} yards.`;
}; // end playPenalty.

let processHike = function (playValue) {
  let value;

  switch (playValue) {
    case "penalty":
      playPenalty();
      break;
    case "sacked":
      value = sack();
      messages.innerHTML = `The quarterback is sacked for a loss of ${value} yards!`;
      break;
    case "turnover":
      value = turnover();
      messages.innerHTML = `Turnover! The ball is recovered by the ${value}.`;
      break;
    default:
      // Do nothing.
  } // end switch playValue.
}; // end processHike.

// Main.

actionButtons.addEventListener("click", function (event) {
  let action = event.target.getAttribute("data-action");
  // do nothing if a button is not clicked.
  if (!action) {
    return;
  } // end if.

  let value;
  switch (action) {
    case "hike":
      value = hike();
      processHike(value);
      break;
    case "fresh downs":
      resetDowns();
      value = hike();
      processHike(value);
      break;
    case "kickoff":
      value = kickoff();
      messages.innerHTML = `The kick is returned to the ${value} yard line.`;
      break;
    case "punt":
      value = parseInt(prompt("Kicking from what absolute yardline?"));
      value = punt(value);
      if (value.isBlocked) {
        messages.innerHTML = `The defense blocks the punt!`;
        break;
      } // end if.
      if (value.isTouchback) {
        messages.innerHTML = `Touchback!`;
        break;
      } // end if.
      messages.innerHTML = `The punt ends up at the ${value.position}`;
      break;
    case "field goal":
      value = prompt("From where are you attempting the field goal?");
      value = fieldGoal(value);
      if (value) {
        messages.innerHTML = `The kick is good!`;
      } else {
        messages.innerHTML = `The kick misses the uprights!`;
      } // end if else.
      break;
    default:
  } // end switch.
}); // end click action buttons.