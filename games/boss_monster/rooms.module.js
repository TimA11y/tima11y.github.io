const rooms = [
	{"name":"All-Seeing Eye","type":"Advanced Trap Room","damage":"3","description":"Once per turn when an opponent plays a Spell card, you may discard a Spell card to cancel its effect.","quantity":"2","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Antimagic Zone","type":"Trap Room","damage":"1","description":"You may discard this from your hand to cancel an opponents Spell. (The Spell is not cast. Place it in the discard pile.)","quantity":"1","cleric":"0","fighter":"0","mage":"2","thief":"0"}
	,
	{"name":"Arcane Crypt","type":"Trap Room","damage":"1","description":"When you build or uncover this Room, you may choose one Spell card from the discard pile and put it into your hand.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Barbarian Hall","type":"Monster Room","damage":"3","description":"When you build this Room, choose and discard one Spell card (if you have any Spell cards in your hand).","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Beast Menagerie","type":"Advanced Monster Room","damage":"4","description":"Once per turn when you build another Monster room, draw a Room card.","quantity":"2","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Blockpile Puzzle","type":"Advanced Trap Room","damage":"5","description":"At the end of each turn, destroy one Room in your dungeon.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Bom-Boy Factory","type":"Trap Room","damage":"3","description":"When a Hero dies in this Room or survives this Room, destroy this Room.","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"0","thief":"1"}
	,
	{"name":"Bottomless Pit","type":"Trap Room","damage":"1","description":"Destroy this room: Kill a Hero in this room.","quantity":"3","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Boulder Ramp","type":"Trap Room","damage":"1","description":"Destroy another room in your dungeon: Deal 5 damage to a hero in this room.","quantity":"2","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Brainsucker Hive","type":"Monster Room","damage":"2","description":"Once per turn, if a Hero dies in this room, you may draw a Spell card.","quantity":"3‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Brainsucker Queen","type":"Advanced Monster Room","damage":"3","description":"Once per turn, if a Hero dies in this Room, draw two Spell cards, then discard a Spell card.","quantity":"1","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Bullet Builder","type":"Trap Room","damage":"1","description":"Once per turn, you may discard a Trap Room to give one Monster Room -1 until end of turn.","quantity":"1","cleric":"0","fighter":"0","mage":"0","thief":"2"}
	,
	{"name":"Centipede Tunnel","type":"Monster Room","damage":"1","description":"When you build this room, you may swap the placement of two Rooms in any one dungeon.","quantity":"2","cleric":"0","fighter":"1","mage":"1","thief":"0"}
	,
	{"name":"Chump Chomper","type":"Advanced Trap Room","damage":"2","description":"Once per turn, you may destroy another Room in your dungeon to give this Room +4 until end of turn.","quantity":"1","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Collapsing Bridge","type":"Trap Room","damage":"1","description":"If a Hero survives this Room, until the end of turn this Room deals +3\nRevised: Once per turn, if a Hero survives this Room, until end of turn this Room deals +3.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Construction Zone","type":"Trap Room","damage":"1","description":"When you build this room, you may immediately build an additional Room.","quantity":"2","cleric":"0","fighter":"1","mage":"0","thief":"1"}
	,
	{"name":"Cursed Tomb","type":"Trap Room","damage":"1","description":"If an effect from another card causes this Room to be destroyed, each opponent must discard two Room cards.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Dark Altar","type":"Trap Room","damage":"1","description":"Destroy this Room: Choose one card from the discard pile and put it into your hand.","quantity":"3","cleric":"2","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Dark Laboratory","type":"Trap Room","damage":"1","description":"When you build this room, draw two spell cards, then discard a Spell card.","quantity":"3","cleric":"0","fighter":"0","mage":"2","thief":"0"}
	,
	{"name":"Dark Portal","type":"Trap Room","damage":"1","description":"Once per turn, you may discard a Spell card to choose one Room card from the discard pile and put it into your hand.","quantity":"1","cleric":"2","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Deadly Treadmill","type":"Trap Room","damage":"2","description":"Once per turn, you may discard a Room card to draw a Room card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Decapitator","type":"Trap Room","damage":"2","description":"During the Build phase, you may destroy this Room to choose one Room in any dungeon and remove its treasure value until end of turn.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Dizzygas Hallway","type":"Trap Room","damage":"1","description":"If the next room in your dungeon is a Trap room, it has +2 damage.","quantity":"3‡","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Dracolich Lair","type":"Advanced Monster Room","damage":"3","description":"Once per turn, you may discard two Room cards to choose one Rom card from the discard pile and put it into your hand.","quantity":"2","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Dragon Graveyard","type":"Advanced Trap Room","damage":"4","description":"Once per turn, if you take a card from the discard pile, draw a Room card.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Dragon Hatchery","type":"Monster Room","damage":"0","description":"(This room contains all four treasure types.)","quantity":"3","cleric":"1","fighter":"1","mage":"1","thief":"1"}
	,
	{"name":"Elemental Generator","type":"Advanced Monster Room","damage":"3","description":"This Room has +X, where X equals the number of Spell cards in your hand.","quantity":"1","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Fangroot Garden","type":"Monster Room","damage":"2","description":"Once per turn, if a Hero dies in this Room, you may immediately build another Room in your dunegon.","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Frostbat Cave","type":"Monster Room","damage":"2","description":"You may destroy this Room to deactivate one Room in any dungeon.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Genie Lounge","type":"Monster Room","damage":"1","description":"When you build this Room, if you have no Spell cards in your hand, draw a Spell card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"1","thief":"1"}
	,
	{"name":"Goblin Armory","type":"Monster Room","damage":"1","description":"Monster Rooms adjacent to this room deal +1 damage.","quantity":"3","cleric":"0","fighter":"2","mage":"0","thief":"0"}
	,
	{"name":"Goblin Mess Hall","type":"Advanced Monster Room","damage":"3","description":"Give ever other Monster Room in your dungeon +1","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Goblin Nursery","type":"Monster Room","damage":"1","description":"If the Room to the left of this is a Monster Room, give that Room +2","quantity":"2 ‡","cleric":"0","fighter":"2","mage":"0","thief":"0"}
	,
	{"name":"Golem Factory","type":"Monster Room","damage":"2","description":"Once per turn, if a hero dies in this room, draw a Room card.","quantity":"3","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Hall of Mirrors","type":"Advanced Trap Room","damage":"2","description":"Once per turn when an opponent plays a Spell card, draw a Spell card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Hatchlings Hoard","type":"Advanced Monster Room","damage":"2","description":"(You may build this over a room with Cleric, Fighter, Mage, or Thief treasure.) treasure type universal","quantity":"3 ‡","cleric":"0","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Haunted Hall","type":"Monster Room","damage":"2","description":"You may destroy this Room to send a Hero in this Room back to town.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Haunted Library","type":"Trap Room","damage":"1","description":"At the beginning of your turn, you may draw from the Spell deck instead of the Room deck.","quantity":"2‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Imp Temple","type":"Monster Room","damage":"1","description":"Once per turn, when you force an opponent to discard a card, put that card into your hand instead.","quantity":"2 ‡","cleric":"2","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Incubus Gym","type":"Advanced Monster Room","damage":"4","description":"When you build this Room, each opponent must discard a Room card.","quantity":"1","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Inner Sanctum","type":"Trap Room","damage":"2","description":"At the end of each turn, if no Heroes entered this Room, you may draw a Room card.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Jackpot Stash","type":"Trap Room","damage":"1","description":"Destroy this room: Double the treasure value of your dungeons Rooms until end of turn.","quantity":"3","cleric":"0","fighter":"0","mage":"0","thief":"2"}
	,
	{"name":"Ligers Den","type":"Advanced Monster Room","damage":"2","description":"Once per turn when you play a Spell card, draw a Spell card.","quantity":"2","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Lost Library","type":"Trap Room","damage":"1","description":"You may destroy this Room to draw two Spell cards, then discard a Spell card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"2","thief":"0"}
	,
	{"name":"Madmans Manor","type":"Trap Room","damage":"2","description":"Once per turn, if a Hero dies in this Room, choose one Spell card from the discard pile and put it into your hand.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Megaworm Burrow","type":"Advanced Monster Room","damage":"4","description":"When you build this Room, choose and destroy one Advanced Room in any dungeon.","quantity":"1","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Mimic Vault","type":"Trap Room","damage":"1","description":"When you build this room, choose one ordinary Hero in town and place it on the entrance to your dungeon.","quantity":"2","cleric":"0","fighter":"0","mage":"1","thief":"1"}
	,
	{"name":"Minotaurs Maze","type":"Monster Room","damage":"0","description":"The first time a Hero enters this room, send it back to the previous room.","quantity":"2‡","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Monsters Ballroom","type":"Advanced Monster Room","damage":"*","description":"This rooms damage is equal to the number of Monster rooms in your dungeon.","quantity":"2","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Monstrous Monument","type":"Trap Room","damage":"1","description":"When you build this room, choose one Monster Room from the discard pile and put it in your hand.","quantity":"2","cleric":"1","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Neanderthal Cave","type":"Monster Room","damage":"3","description":"You cannot build an Advanced Room on Neanderthal Cave.","quantity":"3","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Observatory","type":"Trap Room","damage":"2","description":"Once per turn, you may discard a Spell card to draw a Spell card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Open Grave","type":"Trap Room","damage":"2","description":"Once per turn, If a Hero dies in this room, choose one Room card from the discard pile and put into your hand.","quantity":"2","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Recycling Center","type":"Advanced Trap Room","damage":"3","description":"When another room in your dungeon is destroyed, you may draw two Room cards.","quantity":"2","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Rust Monster Pen","type":"Monster Room","damage":"1","description":"Once per turn, you may discard a Monster Room to give one Trap Room -1 until end of turn.","quantity":"1","cleric":"0","fighter":"2","mage":"0","thief":"0"}
	,
	{"name":"Save Point","type":"Trap Room","damage":"0","description":"You may destroy this Room to retrieve one Spell card from the discard pile that you played this turn.","quantity":"2 ‡","cleric":"1","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Shrooman Cave","type":"Monster Room","damage":"1","description":"When you build or uncover this Room, give another Monster Room +3 until end of turn.","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Sorcerobe School","type":"Monster Room","damage":"1","description":"When you build or uncover this Room, draw a Spell card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Spawn Point","type":"Monster Room","damage":"2","description":"Once per turn, if a Hero dies in this Room, draw two Room cards.","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Specters Sanctum","type":"Monster Room","damage":"2","description":"When you build this room, choose an opponent. That opponent discards a random Spell card.","quantity":"3","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Spellslime Pit","type":"Monster Room","damage":"2","description":"Whenever you play a Spell, this Room gains +1 until end of turn.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Spiked Pit","type":"Trap Room","damage":"1","description":"When you build or uncover this Room, give this Room +3 until end of turn.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Succubus Spa","type":"Monster Room","damage":"1","description":"Once per turn, If a Hero Dies in this room, choose an opponent. Take a random Room or Spell card from that opponents hand.","quantity":"3","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"The Arena","type":"Advanced Monster Room","damage":"2","description":"Once per turn, you may reveal a Monster Room from your hand to give this Room +X, where X is that Rooms power.","quantity":"1","cleric":"0","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"The Crushinator","type":"Advanced Trap Room","damage":"2","description":"Destroy another room in your dungeon: Until end of turn, your Rooms have +2 damage.\nRevised: Once per turn, you may destroy another Room in your dungeon to give all your Rooms +2 until end of turn.","quantity":"2(‡)","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"The Smashinator","type":"Advanced Trap Room","damage":"3","description":"Once per turn, you may destroy every other visible Room in your dungeon to give this Room +6 until end of turn.","quantity":"1","cleric":"0","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Torture Chamber","type":"Trap Room","damage":"1","description":"Destroy this room: Choose an opponent. That opponent discards a random Room card.","quantity":"2","cleric":"1","fighter":"0","mage":"0","thief":"1"}
	,
	{"name":"Vampire Bordello","type":"Advanced Monster Room","damage":"3","description":"Once per turn, If a Hero dies in this room you may heal one wound. (Flip over one of your wounds, adding its Soul value to your total.)","quantity":"2","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Warp Tube","type":"Trap Room","damage":"1","description":"You may destroy this Room to send a Hero in this Room back to the first Room of your dungeon.","quantity":"2 ‡","cleric":"0","fighter":"1","mage":"1","thief":"0"}
	,
	{"name":"Werewolf Den","type":"Monster Room","damage":"1","description":"Once per turn, you may discard a card from your hand to give one Hero +1 until end of turn.","quantity":"2 ‡","cleric":"1","fighter":"1","mage":"0","thief":"0"}
	,
	{"name":"Witchs Kitchen","type":"Monster Room","damage":"1","description":"Once per turn, you may discard a Monster Room card to draw a Spell card.","quantity":"3","cleric":"0","fighter":"0","mage":"1","thief":"0"}
	,
	{"name":"Wraiths Throne","type":"Advanced Monster Room","damage":"3","description":"Once per turn, if a Hero dies in this Room, each opponent must discard a Spell card.","quantity":"1","cleric":"1","fighter":"0","mage":"0","thief":"0"}
	,
	{"name":"Wreck Room","type":"Trap Room","damage":"1","description":"Once per turn, you may destroy another Room in your dungeon to draw a Room card.","quantity":"2 ‡","cleric":"0","fighter":"0","mage":"0","thief":"2"}
	,
	{"name":"Zombie Prison","type":"Monster Room","damage":"1","description":"Destroy this room: Choose a dead Hero in an opponents scorekeeping area. Send it back to the entrance of that players dungeon","quantity":"2","cleric":"1","fighter":"0","mage":"1","thief":"0"}
	
	];

export {rooms};