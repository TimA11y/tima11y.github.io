/**
 * The epic hero cards from Boss Monster 1 and 2.
 */
const epic_heroes = [
{"name":"Archer","health":"12","type":"Fighter / Thief","description":"This Hero is lured to the dungeon with the highest combined Fighter and Thief treasure. This Hero ignores the last Room of your dungeon.\nRevised: This Hero is lured to the dungeon with the highest combined Fighter and Thief treasure. This Hero skips the last Room of your dungeon."}
,
{"name":"Cleric","health":"11","type":"Cleric","description":"Katelyn, Angelic Healer Among the most exalted defenders of righteousness, Katelyn is sometimes referred to as \"altissima luce\" -- highest light."}
,
{"name":"Cleric","health":"11","type":"Cleric","description":"Kerberos Dirtbeard, Canine Cleric Hailing from the Highlands, this flea-bitten friar never turns down a fetch quest."}
,
{"name":"Cleric","health":"13","type":"Cleric","description":"Lord Van Ette A prophet and collector of tithes for the omniscient Celestial, his \"miracles\" are enhanced by the brandewijn distilled by the monks of Nintehn."}
,
{"name":"Cleric","health":"13","type":"Cleric","description":"Jejune & Everlea, Holy SistersTenacious and vivacious, each is a threat on her own. But woe betide any who stand against the sisters united power."}
,
{"name":"Cleric","health":"11","type":"Cleric","description":"Tyrone, Pharaoh Ascendant When Tyrone was young, the temple elders praised his hieroglyphics. But what began as mere artistry grew into miraculous power. Now his wisdom is revered throughout Arcadia."}
,
{"name":"Cleric","health":"11","type":"Cleric","description":"Branadin Wordblessed This cosmic chronicler travels tirelessly from world to world, inscribing each peoples histories and magics on plates of copper. He never stops writing...except to battle the forces of darkness."}
,
{"name":"Cleric","health":"13","type":"Cleric","description":"Heavenboy\nThis son of an angel and a mortal woman was born with clipped wings and half a halo. Now he fights evil with a holy blade and a golden gauntlet known as The Right Hand of Boon."}
,
{"name":"Druid","health":"12","type":"Cleric / Mage","description":"This Hero is lured to the dungeon with the highest combined Cleric and Mage treasure. Give this Hero +X, where X equals the number of Spell cards in your hand."}
,
{"name":"Fighter","health":"11","type":"Fighter","description":"Frankov, the Envoy This brave warrior stands alone against the evil that rules the world."}
,
{"name":"Fighter","health":"11","type":"Fighter","description":"Nate the Squidslayer This surly warrior defeated the mighty Squib, Lord of the Rocktopi. Now he seeks to destroy King Croak himself..."}
,
{"name":"Fighter","health":"13","type":"Fighter","description":"Antonius, the Rune Knight An elite dragoon, Sir Tony wears armor inscribed with magic runes of ancient and mysterious power."}
,
{"name":"Fighter","health":"13","type":"Fighter","description":"Asmor the Aweless What Asmor lacks in tactical acuity, he more than makes up for in impulsiveness. Theres no door he wont kick down, much to the frustration of Arcadias innkeepers."}
,
{"name":"Fighter","health":"11","type":"Fighter","description":"Lone Fox and Kit\nFew know that this mysterious beauty was once a princess. With her daughter on her back, she uses her skills with the sword to seek victory against those who deposed her."}
,
{"name":"Fighter","health":"11","type":"Fighter","description":"Ser Mortin the Deadly\nNo knight is more celebrated, but do not invite Ser Mortin to your wedding feast. Many and more have died to his blade, the noble as well as the wicked..."}
,
{"name":"Fighter","health":"13","type":"Fighter","description":"OBrien the Destroyer\nEvery night, he begins a new quest for glory. This savage redhead has survived the rise and fall of many rivals. He knows what is best in life, and in the end, he will triumph."}
,
{"name":"Mage","health":"11","type":"Mage","description":"Tempros the Time Marauder He would use his control over time to end all crime. In his hands, this world could be a utopia."}
,
{"name":"Mage","health":"11","type":"Mage","description":"Chia Kang, Mystical Warlock of Yu \"Hey, Listen! I think this Boss Monster is--\" \"Silence, fairy! I will crush him through fire and flames in the name of the Order!"}
,
{"name":"Mage","health":"13","type":"Mage","description":"Terric Warhelm, Half-Elf Archmage \"Weakened by an evil curse, this once-mighty warrior donned the red robes and turned to magic. His spells are chnneled through a magical helmet of untold power.\""}
,
{"name":"Mage","health":"13","type":"Mage","description":"Wayward, the Drifter He is a traveler from a strange land whose only goal is to do whatever is right... whatever that means."}
,
{"name":"Mage","health":"11","type":"Mage","description":"Dumbledalf the Blue\nIn a world of punk-rock pyromancers and spiky haired sorcerers, one man believes in keeping things classic. Dumbledalf proves that flowing beards and pointy hats never go out of fashion."}
,
{"name":"Mage","health":"11","type":"Mage","description":"Wrathfuss the Namer\nWrathfuss knew the names of most things, and so most things were his to command. He said to the wind: \"Break!\" and the wind broke."}
,
{"name":"Mage","health":"13","type":"Mage","description":"Markus, Geomancer Supreme\nOnce, he lived alone in a flat, infinite world. Alone, he braved its depths and dangers to mine its riches. Then this unaccompanied miner had a dream. He dreamed he could create anything, even entire worlds, and each world he created held a dreamer of its own."}
,
{"name":"Necromancer","health":"12","type":"Cleric / Fighter","description":"This Hero is lured to the dungeon with the highest combined Mage and Fighter treasure. Each time a player plays a Spell while this Hero is in your dungeon, give this Hero +2."}
,
{"name":"Swordmage","health":"12","type":"Mage / Fighter","description":"This Hero is lured to the dungeon with the highest combined Mage and Fighter treasure. Each time a player plays a Spell while this Hero is in your dungeon, give this Hero +2"}
,
{"name":"The Brothers","health":"20","type":"?","description":"This Hero is lured to the dungeon of the player with the highest total Souls minus Wounds."}
,
{"name":"Thief","health":"11","type":"Thief","description":"Hya, Legendary Shinobi Arcadias deadliest ninja,Hya lives by the proverb that revenge is a dish best served cold."}
,
{"name":"Thief","health":"11","type":"Thief","description":"Blackbeard Jake He hid the treasure he won from insult swordfighting in a booty-trap filled cave on the coast of a town called Astoria."}
,
{"name":"Thief","health":"13","type":"Thief","description":"Cecil Leoran, Master Factotum The ultimate jack-of-all-trades, Cecil isnt above taking mercenary work to earn gold and glory. But his real goal has never changed: to find a way to return his betrothed Nevra, sealed into a rapier, to her original form."}
,
{"name":"Thief","health":"13","type":"Thief","description":"Wallbanger Basketweaver This humble halfing world rather spend his days weaving baskets and eating crumbly cookies. But when adventure calls, he proves a first-rate burglar"}
,
{"name":"Thief","health":"11","type":"Thief","description":"Rom the Reaver\nNo one is faster with a blade, but Rom is a tortured soul. Its as if a monster lurks inside him, and the dungeon is the only safe place to channel his rage."}
,
{"name":"Thief","health":"11","type":"Thief","description":"Gaimina, Thief of Dreams\nNo door is closed to her, nor any dreaming mind, and she does not fear death. But Gaiminas light steps cast long shadows, and she must never let them overtake her."}
,
{"name":"Thief","health":"13","type":"Thief","description":"Roberta, Dreaded Outlaw\nHer life became a nightmare when she was wedded to an evil prince and her true love was slain by a pirate. Roberta took vengeance on both, and now she does as she wishes."}

];

export {epic_heroes};
