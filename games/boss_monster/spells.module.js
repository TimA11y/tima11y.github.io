const spells = [
{"name":"All Your Base","phase":"Build","description":"View an opponents hand. You may take one Room card from that opponent.","quantity":"1"}
,
{"name":"Annihilator","phase":"Adventure","description":"Give one Trap Room +3 damage until end of turn.","quantity":"2‡"}
,
{"name":"Another Castle","phase":"Adventure","description":"Choose a Hero in your dungeon. Send that Hero to the entrance of an opponents dungeon.","quantity":"2 ‡"}
,
{"name":"Assassin","phase":"Adventure","description":"Choose a Hero in an opponents dungeon. Give that Hero +3 Health until end of turn.","quantity":"3"}
,
{"name":"Cave-In","phase":"Adventure","description":"Destroy a room in your dungeon. Kill any Hero in that Room.","quantity":"2‡"}
,
{"name":"Counterspell","phase":"Build & Adventure","description":"Choose a Spell card that has just been declared. Cancel the effects of that Spell card. (The canceled Spell card is sent to the discard pile.)","quantity":"2"}
,
{"name":"Exhaustion","phase":"Adventure","description":"Deal X damage to one Hero in your dungeon, where X is equal to the number of rooms in your dungeon.","quantity":"1"}
,
{"name":"Fairy Fountain","phase":"Build","description":"Choose a Room. Until end of turn, it does zero damage and each Hero entering it gains +1.","quantity":"2 ‡"}
,
{"name":"Fear","phase":"Adventure","description":"Choose a Hero in any dungeon and send it back to town.","quantity":"2"}
,
{"name":"Freeze","phase":"Build & Adventure","description":"Choose and deactivate one Room in any dungeon. (It has no damage, treasure, or abilities until end of turn.)","quantity":"4"}
,
{"name":"Giant Size","phase":"Adventure","description":"Give one Monster Room +3 damage until end of turn.","quantity":"2"}
,
{"name":"Hiring Spree","phase":"Build","description":"Draw three Room cards, then give another player one of your Room cards.","quantity":"2 ‡"}
,
{"name":"Its On!","phase":"Adventure","description":"Kill one Hero in your dungeon who has 3 or less Health. OR If you have 3 wounds or more, kill one Hero in your dungeon.","quantity":"2 ‡"}
,
{"name":"Jeopardy","phase":"Build & Adventure","description":"All players must discard their hands, then draw one Spell card and two Room cards.","quantity":"2"}
,
{"name":"Kobold Strike","phase":"Build","description":"No rooms can be built this turn. Any face-down Room is returned to its owners hand.","quantity":"1"}
,
{"name":"Lightning Bolt!","phase":"Adventure","description":"Deal 3 damage to one Hero in your dungeon. AND If you discard another Spell card, deal 3 damage to each Hero at the entrance to your dungeon.","quantity":"2 ‡"}
,
{"name":"Meddling Kids!","phase":"Build & Adventure","description":"Choose a Room. Until the end of turn, it has no ability text. OR Choose a player. If three or more Heroes entered that players dungeon this turn, that player cannot win this turn.","quantity":"1"}
,
{"name":"Motivation","phase":"Build","description":"If you have fewer Rooms than an opponent, you may build an extra room this turn. (You must declare this before any Rooms are revealed.)","quantity":"2"}
,
{"name":"Oh, Yeah!","phase":"Build & Adventure","description":"Swap the placement of two Rooms in your dungeon. OR If two or more of your Rooms have been destroyed this turn, choose and destroy one Room in any dungeon.","quantity":"1"}
,
{"name":"Party Up","phase":"Adventure","description":"Choose a dungeon. Until the end of turn, each Hero entering that dungeon gains +1","quantity":"2 ‡"}
,
{"name":"Pause","phase":"Adventure","description":"If there is a Hero in your dungeon, return it to the entrance and restore it to full Health. No Heroes may enter your dungeon until next turn.","quantity":"2 ‡"}
,
{"name":"Pity","phase":"Adventure","description":"Choose a Hero in an opponents dungeon. Remove that Hero from the game.","quantity":"2 ‡"}
,
{"name":"Princess in Peril","phase":"Build","description":"Choose one Hero in town. Place it at the entrance to your dungeon.","quantity":"2"}
,
{"name":"Secret Stash","phase":"Build","description":"Choose a Room in your dungeon. Until end of turn, give it one extra Cleric, Fighter, Mage or Thief.","quantity":"2 ‡"}
,
{"name":"Shortcut!","phase":"Adventure","description":"Choose a Hero in any dungeon. It skips the next Room it would enter. OR If that dungeon has five Rooms, the Hero skips the next two Rooms it would enter.","quantity":"2 ‡"}
,
{"name":"Soul Harvest","phase":"Build & Adventure","description":"Choose a face-down Hero in your scorekeeping area and remove it from the game. Draw two Spell cards.","quantity":"1"}
,
{"name":"Super Effective!","phase":"Adventure","description":"Choose a Room in your dungeon. It deals +2 until end of turn. OR If only one Hero was lured to your dungeon this turn, that Room does +4 until end of turn.","quantity":"2 ‡"}
,
{"name":"Surprise Gift","phase":"Build","description":"During the Build phase, you may place a Room in an opponents dungeon instead of your own. (Place it face-down over a face-up Room. Opponent may still place another Room. Any build effects apply to the opponent.)","quantity":"2 ‡"}
,
{"name":"Teleportation","phase":"Adventure","description":"Send a Hero in your dungeon back to the first room of your dungeon. (It continues to move through your dungeon this turn.)","quantity":"2‡"}
,
{"name":"Trepidation","phase":"Adventure","description":"Choose a player with at least two more Souls than you. No Hero enters that players dungeon this turn. (Any Heroes remain at the entrance to that dungeon.)","quantity":"1"}
,
{"name":"Undead Minion","phase":"Adventure","description":"Choose one face-down Hero in your scorekeeping area and remove it from the game. Deal damage equal to that Heros Health to one Hero in your dungeon.","quantity":"2 ‡"}
,
{"name":"Wild Monster","phase":"Adventure","description":"You may immediately build a Monster Room over an existing Room in your dungeon.","quantity":"2 ‡"}
,
{"name":"Zombie Attack","phase":"Build","description":"Choose a dead Hero in an opponents scorekeeping area. Send it back to the entrance of that players dungeon. Until end of turn, it has +2 Health.","quantity":"2"}

];

export {spells};