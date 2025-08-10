const form = document.querySelector("form");
const dice = document.querySelector("#dice");
const btnRoll = document.querySelector("#roll");
const results = document.querySelector("#results");

function d6 () {
	return Math.floor(Math.random() * 6)+1;
} // end d6 function.

function roll (num) {
	let results = [];
	let total = 0;
	let maxes = 0;

	for (let i = 0; i < num; i++) {
		let result = d6();
		results.push(result);
		total = total + result;
		if (result === 6) {
			maxes = maxes + 1;
		} // end if.
	} // end for.

	return {
		"results": results,
		"total": total,
		"6s": maxes
	}
} // end roll. 

function display (diceResults) {
	results.innerHTML = "";
	results.innerHTML = `
	<div>
		<h1>Total (${diceResults.results.length}d6): ${diceResults.total}</h1>
		<div>6s: ${diceResults["6s"]}</div>
		<div>[${diceResults.results.join(", ")}]</div>
	</div>`;
} // end display.

form.addEventListener("submit", function (event) {
	const value = dice.value;
	display(roll(value));
	event.preventDefault();
}); // end form submit. 