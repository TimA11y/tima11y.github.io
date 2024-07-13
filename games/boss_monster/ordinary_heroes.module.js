/**
 * The ordinary hero cards from Boss Monster 1 and 2.
 */
const ordinary_heroes = [
{"name":"Barbarian","health":"6","type":"Fighter","description":"Once per turn, any opponent may discard a Room with Fighter to give this Hero +3 until end of turn."}
,
{"name":"Cleric","health":"4","type":"Cleric","description":"Nick the Masher The young cleric was well-armed, and brave enough to take on the Dragon King himself. His credo: \"I bash it with my mace.\""}
,
{"name":"Cleric","health":"4","type":"Cleric","description":"Pugi the Druidess A defender of the wilderness, she wields the power of Nature. Flowers blossom in her footsteps, and life grows anew."}
,
{"name":"Cleric","health":"6","type":"Cleric","description":"Acacia, Warrior of Light Acacia is a carefree soul who makes her own luck. A strong defender of good, she is undeterred by even the darkest dungeons."}
,
{"name":"Cleric","health":"6","type":"Cleric","description":"Charles the Young Charles has mothers permission to go adventuring, but he has to return before sundown."}
,
{"name":"Cleric","health":"8","type":"Cleric","description":"Delatorious, Angel of Light Created by the Goddess of Light to defend Arcadia, this kid angel never misses a shot with his enchanted crossbow."}
,
{"name":"Cleric","health":"8","type":"Cleric","description":"Romero, the Indigo Friar He is a dedicated man of the cloth who wants to see the world coated in blue. You might think hes depressed, but hes actually very, very happy."}
,
{"name":"Cleric","health":"4","type":"Cleric","description":"Elfstar Once an acolyte limited to simple orisons, Elfstar is now a true priestess who has mastered the mind bondage spell. Shes accepted that nothing is more important than her spiritual growth."}
,
{"name":"Cleric","health":"4","type":"Cleric","description":"Kyle the Incorruptible This acolyte of the Order declared himself free from sin and immune to temptation ...an unwavering agent of virtue."}
,
{"name":"Cleric","health":"6","type":"Cleric","description":"Danae the Slayer A woman of few words, Danae is relentlessly focused on her mission: to eliminate every undead abomination in Arcadia. As long as she keeps the faith, no zombie is safe."}
,
{"name":"Cleric","health":"6","type":"Cleric","description":"Solemn Caine, Pilgrim of Pain This zealot has mounted a one-man inquisition into the darkest depths of Arcadias dungeons. A grim slayer of the godless, he holds particular disdain for Belladonna and her vampire kin."}
,
{"name":"Cleric","health":"8","type":"Cleric","description":"Adynn, Cleric of Love The son of a philandering elf, Adynn inherited his fathers charm and beauty. As a missionary Cleric of the Goddess of Love, he is always eager to practice what he preaches."}
,
{"name":"Fighter","health":"4","type":"Fighter","description":"Boden the Pantless Bodens courage is matched only by his forgetfulness. The quest to find his misplaced armor continues!"}
,
{"name":"Fighter","health":"4","type":"Fighter","description":"Jarek, Squire to the Lion Knights As a squire, Jarek loved nothing more than stories and legends. He had no idea that someday, he would become one."}
,
{"name":"Fighter","health":"6","type":"Fighter","description":"Fires Breath, Heroine of Arcadia The scarlet-haired warrior woman known as Fires Breath has pledged her deadly twin blades to the fight for liberty"}
,
{"name":"Fighter","health":"6","type":"Fighter","description":"Samurai Tom Not truly a samurai, this masterless ronin seeks honor and glory."}
,
{"name":"Fighter","health":"8","type":"Fighter","description":"Johnny of the Evening Watch A humble member of the Evening Watch, whose band obrothers is sworn to forsake family, take the grey, and clear dungeons."}
,
{"name":"Fighter","health":"8","type":"Fighter","description":"Crystol and Alan of Gerd Bound by the unbreakable Ring of Gerd, these lovers became the most dangerous husband-wife team in the adventuring business."}
,
{"name":"Fighter","health":"4","type":"Fighter","description":"Hookshot Joe Once the commander of an elite fighting unit, he lost his left hand in battle. Now, with a grappling hook permanently fused to his arm, Hookshot Joe carries on the fight."}
,
{"name":"Fighter","health":"4","type":"Fighter","description":"Tarka, Eskimo Warrior This northern warrior will not rest until he finds his best friend. No dungeon is too deep to delve, no mountain too high to climb. Hell do whatever it takes to bring his buddy home."}
,
{"name":"Fighter","health":"6","type":"Fighter","description":"Lady Samantha Her skills as a weaponsmith made Lady Samantha one of the wealthiest nobles in Arcadia. In search of greater glory, she armed herself to the teeth and set off to hunt for the Brainsucker Queen."}
,
{"name":"Fighter","health":"6","type":"Fighter","description":"Ampersand the Galled This dwarven warrior is legendary for his prodigious appetite, his puissant skill at arms, and his crazy temper. What he lacks in height he makes up for in rage fueled strength."}
,
{"name":"Fighter","health":"8","type":"Fighter","description":"Damok, Dragon Hunter Some regard him as a savage for his primitive weaponry, and his speech consists of cryptic phrases like \"Scythe, his face black, his eyes red.\" But none doubt Damoks skill in battle."}
,
{"name":"Hitman","health":"6","type":"Thief","description":"Once per turn, any opponent may discard a Room with Thief to give this Hero +3 until end of turn."}
,
{"name":"Mage","health":"4","type":"Mage","description":"Tieg and the Magic Bubble Armed with his trusty bubble, Tieg braves dangerous castles and dungeons in search of the musical instruments stolen from his people."}
,
{"name":"Mage","health":"4","type":"Mage","description":"Brandork the Neverwrong Schooled in seven flavors of magic, Brandork follows the teachings of master Face, the Omniscient Celestial"}
,
{"name":"Mage","health":"6","type":"Mage","description":"Mitchell, the Judge He has wandered the planes, hopelessly lost... ever since his wife, Nikki, sent him to the store for diamond dust sugar."}
,
{"name":"Mage","health":"6","type":"Mage","description":"Kalish Ninefingers The worst thief ever, Kalish lost a finger and his freedom in one night. Taught magic in prison by his sorcerous cellmate, he now kills evil with fire."}
,
{"name":"Mage","health":"8","type":"Mage","description":"Dartteon, Elf Pyromancer Some elves just want to watch the world burn."}
,
{"name":"Mage","health":"8","type":"Mage","description":"Koey, The Last Dragon Mage The survivor of Drakonia vowed to save the world from Kiraxs reign with the power bestowed to him by the last emerald dragon."}
,
{"name":"Mage","health":"4","type":"Mage","description":"Megan the Missile Mage This intrepid adventuress, also known as \"the Azure Evoker,\" is not your typical wizard. Specializing in magic missiles, shed rather be battling monsters than studying dusty tomes."}
,
{"name":"Mage","health":"4","type":"Mage","description":"Otus the Occult Otus has seen things that the would drive most mortal men to madness. But he is a man of vision, and a touch of insanity only makes his magic more powerful."}
,
{"name":"Mage","health":"6","type":"Mage","description":"A Kid and His Spellslime When an ordinary kid discovered a wounded spellslime, he nursed it back to health with candy. The spellslime rewarded his kindness with an adventure to a world of magic."}
,
{"name":"Mage","health":"6","type":"Mage","description":"Wink the Probably Magical Winks apparent lack of magical talent has not stopped him from going on adventures, or referring to his pet chameleon as his \"familiar.\" But so far, everythings going well."}
,
{"name":"Mage","health":"8","type":"Mage","description":"Iskandar, Ice Mage Once a small-town librarian, Iskandar became a hero when he defended his town against a dragon attack. Now he seeks to use his chilling ice magic to bring down the dragons of Arcadia."}
,
{"name":"The Fool","health":"2","type":"?","description":"The Fool is lured to the dungeon of the Boss Monster with the fewest Souls. (In the case of a tie, he waits in town until the tie is broken.)"}
,
{"name":"The Fool","health":"2","type":"?","description":"The Fool is lured to the dungeon of the player with the fewest Souls. (In the case of a tie, he waits in town until the tie is broken.)"}
,
{"name":"Thief","health":"4","type":"Thief","description":"Joman Chimm, Cutpurse From the twinkle in his eye, you might think he comes bearing gifts... until you check your empty pockets."}
,
{"name":"Thief","health":"4","type":"Thief","description":"Lance Uppercut, Treasure Hunter With a bent blade and a clenched fist, he gathers shining treasures for the glory of the Keonish Empire."}
,
{"name":"Thief","health":"6","type":"Thief","description":"Jesta the Rogue \"Okay, so you take the big guy on the left with the axe, youve got the two little ones on the right with swords, and Ill take this dangerous-looking treasure chest with no lock over here...\""}
,
{"name":"Thief","health":"6","type":"Thief","description":"Kins Klauski, Mad Conquistador \"Its hard for me to think about death, how insects and worms will eat me... I never think about death. I havent even properly started to live yet.\""}
,
{"name":"Thief","health":"8","type":"Thief","description":"Sir Digby Apple, Ace Detective He battles to keep the coffers filling, to keep his partners preening and to send a needless message of power to all of the unwilling."}
,
{"name":"Thief","health":"8","type":"Thief","description":"Jerome, Kung Fu Monkey A Visitor from a distant land, his hyperactive monkey studied martial arts under the legendar Sifu Wang."}
,
{"name":"Thief","health":"4","type":"Thief","description":"Black Leaf Black Leaf is always the first to scout ahead, swing across a chasm, or disable a poins trap. She always says theres no danger shes afraid to face, except a life without adventure."}
,
{"name":"Thief","health":"4","type":"Thief","description":"Murphy the Magnificent He was a charlatan, a carnival performer, and a con man ...all before he turned sixteen. When he delved into his first dungeon, he discovered he was something else: a hero."}
,
{"name":"Thief","health":"6","type":"Thief","description":"Colgar, Fugitive Prince He lost his kingdom to Cerebellus, but he retains his ancestral weapon. Now this royal rogue must use his disk-glaive and his wits to regain his thone...or at least his honor."}
,
{"name":"Thief","health":"6","type":"Thief","description":"Francisco the Endbringer\nThis highly trained assassin from the southern Silver Kingdom is known as the \"painter or blood.\""}
,
{"name":"Thief","health":"8","type":"Thief","description":"Raymond Two-Chains Once he was an outlaw, notorious for wielding his chain-whips with deadly precision. Now hes a man one a mission. He tracks the Croaking King across dimensions, and will stop at nothing to find him."}
,
{"name":"Vampire","health":"6","type":"Cleric","description":"Once per turn, any opponent may discard a Room with Cleric to give this Hero +3 until end of turn."}
,
{"name":"Witch","health":"6","type":"Mage","description":"Once per turn, any opponent may discard a Room with Mage to give this Hero +3 until end of turn."}

];

export {ordinary_heroes};