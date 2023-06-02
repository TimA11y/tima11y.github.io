/** 
 * Find a specific planet in a group of arrays.
 * @param {Object} planetData - The object containing the arrays.   * @param {String} planetName - The name of a planet.
 * @param {String} planetName - The name of a planet.
 * @returns {String} returns the name of the array that contains the planet.
 */
const findPlanet = function (planetData, planetName) {
    
    for (let key of Object.keys(planetData)) {
        // Skip this key if it is not an array.
        if (!Array.isArray(planetData[key])) {
            continue;
        } // end if.

        for (let planet of planetData[key]) {
            if (planetName === planet.name) {
                return key;
            } // end if.
        } // end for planet.
    } // end for key
    return false; // The planet was not found.
}; // end findPlanet.

/** 
 * Find the index of the planet in an array.
 * @param {Array} list - an array of planet object.
 * @param {String} planetName - the name of the planet to locate in the array.
 * @returns {Integer} The position in the array or -1 if is not in the array.
 */
const findPlanetIndex = function (list, planetName) {
    return list.findIndex((planet) => {
        return planetName === planet.name;
    });
}; // end findPlanetIndex.

export {findPlanet, findPlanetIndex};