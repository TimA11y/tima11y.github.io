const bosses = [
	{"name":"Angstigoth","title":"One-Winged Demon","xp":"475","description":"Level Up: For the rest of the game, once per turn when you kill a Hero, draw a Room card.","cleric":"0","fighter":"0","mage":"0","thief":"1","field9":""}
	,
	{"name":"Belladonna","title":"Vampire Baroness","xp":"350","description":"Level Up: Heal a Wound. (Turn one face-down Hero face-up.)","cleric":"1","fighter":"0","mage":"0","thief":"0","field9":""}
	,
	{"name":"Cerebellus","title":"Father Brain","xp":"650","description":"Level Up: You may draw three Spell cards, then discard a Spell card.","cleric":"0","fighter":"0","mage":"1","thief":"0","field9":""}
	,
	{"name":"Cleopatra","title":"Mother of Mummies","xp":"850","description":"Level Up: You may search the Room Deck or discard pile for an Advanced Trap Room. You may immediately build the room (over a room with a matching Treasure type).","cleric":"0","fighter":"0","mage":"0","thief":"1","field9":""}
	,
	{"name":"Doc Scarecrow","title":"Ambassador of Fear","xp":"375","description":"Level Up: For the rest of the game, during the Build phase you may discard one card to choose one Hero in town. That Hero cannot be lured this turn.","cleric":"1","fighter":"0","mage":"0","thief":"0","field9":""}
	,
	{"name":"Dr. Timebender","title":"Mad Alchemist","xp":"925","description":"Level Up: For the rest of the game, once per turn you may discard a Spell card to cancel an opponents Spell.","cleric":"0","fighter":"0","mage":"1","thief":"0","field9":""}
	,
	{"name":"Draculord","title":"Hypnotic Vampire","xp":"900","description":"Level Up: Target opponent reveals his or her hand. Take one card and put it into your hand.","cleric":"1","fighter":"0","mage":"0","thief":"0","field9":""}
	,
	{"name":"Eclipse","title":"Charrer of Souls","xp":"525","description":"Level Up: For the rest of the game, when you destroy a Room in your dungeon, the uncovered Room gains +3 until end of turn.","cleric":"0","fighter":"0","mage":"0","thief":"1","field9":""}
	,
	{"name":"Gorgona","title":"Queen of Medusia","xp":"500","description":"Level Up: Choose a Hero in town. Immediately destroy that Hero and place it face-down in your scorekeeping area.","cleric":"0","fighter":"0","mage":"0","thief":"1","field9":""}
	,
	{"name":"Kazanna","title":"Genie of Games","xp":"550","description":"Level Up: Discard your hand, then draw 3 Spell cards.","cleric":"0","fighter":"0","mage":"1","thief":"0","field9":""}
	,
	{"name":"Killa","title":"Man-Eating Ape","xp":"825","description":"Level Up: For the rest of the game, if you have 3 Wounds or more, give the last Room of your dungeon +3","cleric":"0","fighter":"1","mage":"0","thief":"0","field9":""}
	,
	{"name":"King Croak","title":"Sultan of the Sewers","xp":"800","description":"Level Up: You may search the Room Deck or discard pile for an Advanced Monster Room. You may immediately build the room (over a room with a matching Treasure type).","cleric":"0","fighter":"1","mage":"0","thief":"0","field9":""}
	,
	{"name":"Nicolius","title":"The Arcane Dragon","xp":"975","description":"Level Up: For the rest of the game, you may draw a Spell card at the end of turn if any player has gained two more souls than you that turn.","cleric":"0","fighter":"0","mage":"1","thief":"0","field9":""}
	,
	{"name":"Porkus","title":"King of Thieves","xp":"450","description":"Level Up: Choose one face-down Hero from your scorekeeping area and remove it from the game. Search the Hero decks, choose one Hero, and place it face-down in your scorekeeping area.","cleric":"0","fighter":"0","mage":"0","thief":"1","field9":""}
	,
	{"name":"Robobo","title":"Angry Golem","xp":"400","description":"Level Up: Each opponent must choose and destroy one Room in his or her dungeon.","cleric":"0","fighter":"1","mage":"0","thief":"0","field9":""}
	,
	{"name":"Seducia","title":"Sorceress of Sexiness","xp":"600","description":"Level Up: You may search through town or the Hero decks, choose one Hero, and put it at the entrance to your dungeon.","cleric":"0","fighter":"0","mage":"1","thief":"0","field9":""}
	,
	{"name":"Shellda","title":"Kappa Princess","xp":"425","description":"Level Up: For the rest of the game, at end of turn you may swap the placement of two Rooms in one dungeon.","cleric":"0","fighter":"1","mage":"0","thief":"0","field9":""}
	,
	{"name":"Smoake","title":"The Dwarfbane","xp":"625","description":"Level Up: For the rest of the game, whenever you build a Monster Room, you may Draw a Room card.","cleric":"0","fighter":"1","mage":"0","thief":"0","field9":""}
	,
	{"name":"Torix UzKali","title":"The Beckoner","xp":"725","description":"Level Up: For the rest of the game, whenever any Monster Room is discarded or destroyed, you may put it into your hand.","cleric":"1","fighter":"0","mage":"0","thief":"0","field9":""}
	,
	{"name":"Xyzax","title":"Progenitor Lich","xp":"750","description":"Level Up: Choose two cards from the discard pile and put them into your hand.","cleric":"1","fighter":"0","mage":"0","thief":"0","field9":""}
	,
	{"name":"","title":"","xp":"","description":"","cleric":"","fighter":"","mage":"","thief":"","field9":""}
	
	];

export {bosses};