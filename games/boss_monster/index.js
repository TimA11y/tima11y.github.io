// Import modules
import {bosses} from "./bosses.module.js";
import {rooms} from "./rooms.module.js";
import {spells} from "./spells.module.js";
import {createBossCard, createOptions, createRoomCard, createSpellCard} from "./utils.module.js";

async function setClipboard(text) {
  const type = "text/plain";
  const blob = new Blob([text], { type });
  const data = [new ClipboardItem({ [type]: blob })];
  await navigator.clipboard.write(data);
}

const selectBoss = document.querySelector("#selectBoss");
const displayBoss = document.querySelector("#displayBoss");
const selectRoom = document.querySelector("#selectRoom");
const displayRoom = document.querySelector("#displayRoom");
const selectSpell = document.querySelector("#selectSpell");
const displaySpell = document.querySelector("#displaySpell");

selectBoss.innerHTML = createOptions(bosses);
selectRoom.innerHTML = createOptions(rooms);
selectSpell.innerHTML = createOptions(spells);

selectBoss.addEventListener("change", function (event) {
	displayBoss.innerHTML = "";
	displayBoss.innerHTML = createBossCard(JSON.parse(selectBoss.value));
	setClipboard(displayBoss.textContent.trim());
}); // end selectBoss change.

selectRoom.addEventListener("change", function (event) {
	displayRoom.innerHTML = "";
	displayRoom.innerHTML = createRoomCard(JSON.parse(selectRoom.value));
	setClipboard(displayRoom.textContent.trim());
}); // end selectRoom change.

selectSpell.addEventListener("change", function (event) {
	displaySpell.innerHTML = "";
	displaySpell.innerHTML = createSpellCard(JSON.parse(selectSpell.value));
	setClipboard(displaySpell.textContent.trim());
}); // end selectSpell change.
