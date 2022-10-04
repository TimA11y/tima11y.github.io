let data = new Map([
  ["Cave", ["Camp"]],
  ["Camp", ["Cave", "West_Bridge"]],
  ["Precinct", ["Fountain"]],
  ["Inn", ["Fountain"]],
  ["Barn", ["Theatre"]],
  ["Dungeon", ["Tower"]],
  ["West_Bridge", ["Camp", "Fountain", "Mansion"]],
  ["Fountain", ["West_Bridge", "Precinct", "Inn", "Theatre"]],
  ["Theatre", ["Fountain", "Barn", "Tower", "East_Bridge"]],
  ["Tower", ["Theatre", "Dungeon", "Docks"]],
  ["Mansion", ["Abbey", "Lamp", "West_Bridge"]],
  ["East_Bridge", ["Theatre", "Shop"]],
  ["Docks", ["Tower"]],
  ["Abbey", ["Crypt", "Mansion"]],
  ["Lamp", ["Museum", "Mansion", "Shop", "Church"]],
  ["Shop", ["Lamp", "East_Bridge", "Laboratory"]],
  ["Crypt", ["Abbey"]],
  ["Museum", ["Lamp"]],
  ["Church", ["Hospital", "Graveyard", "Lamp"]],
  ["Laboratory", ["Shop", "Institute"]],
  ["Hospital", ["Church"]],
  ["Graveyard", ["Church"]],
  ["Institute", ["Laboratory"]]
]);

export {data};