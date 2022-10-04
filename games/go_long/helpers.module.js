// Data variables.
const dice = {
  "qb": [
    "turnover",
    "penalty",
    "sacked",
    "*", // marks a successful play.
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*",
    "*"
  ],
  "play": [
    -2,
    -1,
    0,
    0,
    0,
    1,
    1,
    1,
    2,
    2,
    2,
    3
  ],
  "bigPlay": [
    -10,
    0,
    0,
    0,
    5,
    6,
    6,
    7,
    10,
    20,
    30,
    "td"
  ],
  "possession": [
    "D",
    "D",
    "D",
    "D",
    "D",
    "D",
    "O",
    "O",
    "O",
    "O",
    "O",
    "O"
  ],
  "penalty": [
    5,
    5,
    5,
    5,
    5,
    10,
    10,
    10,
    15,
    15,
    "pi", // pass interference.
    "op" // offsetting penalties.
  ],
  "kicking": [
    10,
    20,
    25,
    30,
    35,
    40,
    45,
    50,
    55,
    60,
    "x", // blocked punt or touch back.
    "xx" // field goal or touch back.
  ]
}; // end dice.

/** 
 * Roll the dice and return a result.
 * @param {Array} diceArray - Array of dice values.
 * @return {string} result
*/
const roll = function (diceArray) {
  let value = Math.floor(Math.random() * diceArray.length);
  return diceArray[value];
}; // end roll.

/** 
 * initial kickoff
 * @return {number} - starting yardline.
*/
const kickoff = function () {
  let value = roll(dice.kicking);
  if (value === "x" || value === "xx") {
    value = 25;
  } // end if.
  return parseInt(value);
}; // end kickoff.


/** 
 * Punting
 * @param {number} yardline - current absolute yardline.
 * @return {object} - returns an object containing the results.
*/
const punt = function (yardline) {
  let isTouchback = false;
  let isBlocked = false;
  let puntDistance = roll(dice.kicking);

  if (puntDistance === "x") { // is blocked.
    isBlocked = true;
    puntDistance = 0;
  } else if (puntDistance === "xx") { // punted for a touchback.
    puntDistance = 100;
  } // end if else if.

  let total = yardline + puntDistance;

  if (total >= 100) { // is a touchback.
    isTouchback = true;
    total = 80;
  } // end if.

  return {
    "position": total,
    "touchback": isTouchback,
    "blocked": isBlocked
  };
  
}; // end punt.
/** 
 * Attempt to make a field goal or extra point.
 * @param {number} yardline - the current yardline (absolute) where the attempt is being made from.
 * @return {object} returns an object indicating the success/failure (fieldGoal: true/false) or or if goal was blocked (blocked: true/false).
*/
let fieldGoal = function (yardline) {
  let value = roll(dice.kicking) ;
  if (value === "x") { // kick blocked.
    value = 0;
  } else if (value === "xx") { // field goal!
    value = 100;
  } // end if else if.

  return {
    "fieldGoal": ((value + yardline) >= 100),
    "blocked": (value === 0)
  };
}; // end fieldGoal.

/** 
 * The QB was sacked by the defense.
 * @return {number} the number of yards the offense loses on the sack. * 
*/
const sack = function () {
  let value = roll(dice.penalty);
  if (value === "pi") {
    value = 10;
  } else if (value === "op") {
    value = 0;
  } // end if else.

  return value * -1;
}; // end sack.

/** 
 * Turnover!
 * @return {string} Whether the offense or defense recovers the ball after a fumble or dropped pass.
 * 
*/
const turnover = function () {
  let value = roll(dice.possession);

  return (value === "O")?"offense":"defense";
}; // end turnover.

/** 
 * There is a penalty on the play.
 * @return {object} the penalty object with yards, penalty type, and whether the penalty is on the defense or offense.
*/
const penalty = function () {
  let type = roll(dice.penalty);
  let team = roll(dice.possession);
  let yardage = 0;

  switch (type) {
    case "op":
      type = "offsetting penalties";
      team = "both";
      yardage = 0;
      break;
    case "pi":
      type = "pass interference";
      if (team === "O") { // pass interference on offense.
        yardage = 10;
      } else { // pass interference on defense.
        let value = roll(dice.bigPlay);
        if (value < 10) {
          yardage = 10;
        } else {
          yardage = value;
        } // end if else.
      } // end if else 
      break;
    default:
      yardage = parseInt(type);
      type = "penalty";
  } // end switch.

  switch (team) {
    case "D":
      team = "defense";
      break;
    case "O":
      team = "offense";
      yardage = yardage * -1;
      break;
    default: // do nothing.
  } // end switch.

  return {
    "type": type,
    "team": team,
    "yardage": yardage
  };

}; // end penalty.

/** 
 * Make play.
 * @return {object} object containing results of a play.
*/
const play = function () {
  return {
    "play": [
      roll(dice.play),
      roll(dice.play),
      roll(dice.play)
    ],
    "bigPlay": roll(dice.bigPlay)
  };
}; // end play.

/** 
 * Is the current play successful?
 * @return {string} result of the play.
*/
const qb = function () {
  return roll(dice.qb);
}; // end qb.

export {kickoff, punt, fieldGoal, sack, turnover, penalty, play, qb, roll, dice};