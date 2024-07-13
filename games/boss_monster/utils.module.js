function countTreasures (cardData) {
	let treasures = []
	if (cardData.cleric > 0) {
		treasures.push(`cleric ${cardData.cleric}`);
	}
	if (cardData.fighter > 0) {
		treasures.push(`fighter ${cardData.fighter}`);
	}
	if (cardData.mage > 0) {
		treasures.push(`mage ${cardData.mage}`);
	}
	if (cardData.thief > 0) {
		treasures.push(`thief ${cardData.thief}`);
	}
	return treasures.join(", ");
} // end countTreasures.

function createBossCard (card) {
	return `
<div class="card">
<h2>${card.name} ${card.title}</h2>
<ul>
<li>XP: ${card.xp}</li>
<li>Treasures: ${countTreasures(card)}</li>
<li>${card.description}</li>
</ul>
	</div>`;
} // createBossCard.

function createRoomCard (card) {
	return `
	<div class="card">
		<h2>${card.name} [${card.type}]</h2>
		<ul>
			<li>Damage: ${card.damage}</li>
			<li>Treasures: ${countTreasures(card)}</li>
			<li>Ability: ${card.description}</li>
		</ul>
	</div>`;
} // createRoomCard

function createSpellCard (card) {
	return `
	<div class="card">
		<h2>${card.name} [${card.phase}]</h2>
		<p>${card.description}</p>
	</div>`;
} // end createSpellCards

function createOptions (cards) {
	let options = [];
	for (let card of cards) {
		options.push(`<option value='${JSON.stringify(card)}'>${card.name}</option>`);
	} // end for.
	return options.join('\n');
}  // ende createOptions.

export {createOptions, createBossCard, createRoomCard, createSpellCard};