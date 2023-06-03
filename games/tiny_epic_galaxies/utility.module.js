/** 
 * Finds a planet and returns the name of the array containing the planet in the object.
 * @param {String} planetName - The name of a planet.
 * @param {Object} planetObject - The object containing the arrays.
 * @returns {String} the name of the array in the object that contains the planet name.
 */
const findPlanet = function (planetName, planetObject) {
  let planetKeys = Object.keys(planetObject);
  for (let key of planetKeys) {
    if (!Array.isArray(planetObject[key])) {
      continue;
    } // end if.
    for (let planet of planetObject[key]) {
      if (planet.name === planetName) {
        return key;
      } // end if.
    } // end for planet.
  } // end for key.
  return false;
}; // end findPlanet.

/** 
 * Return the index of the object that matches the planet's name.
 * @param {String} planetName - The name of the planet.
 * @param {Array} planetArray - The array of planet objects.
 * @returns The index containing the planet or -1 if there is no match.
 */
const findPlanetIndex = function (planetName, planetArray) {
  return planetArray.findIndex((planet) => {
    return planet.name === planetName;
  });
}; // end findPlanetIndex.

export { findPlanet, findPlanetIndex };