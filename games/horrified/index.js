import {data} from "./data.js";

// User Interface variables.
let selLocation = document.querySelector("#location");
let locationInfo = document.querySelector("#locationInfo");

// Helper functions.
let createInfo = function (locationName, locationData) {
let card = document.createElement("div");
  card.innerHTML = `<h1 tabindex="-1">${locationName} [${locationData.length} place${(locationData.length > 1)?"s":""}]`;
  card.innerHTML = card.innerHTML + `<ul>`;
  for (let place of locationData) {
    card.innerHTML = card.innerHTML + `<li><a href="#" data-place="${place}">${place}</a></li>`;
  } // end for locationData
  card.innerHTML = card.innerHTML + `</ul>`;

  return card;
}; // end createCard.


// User Interface setup.
for (let loc of data.keys()) {
  let option = document.createElement("option");
  option.value = loc;
  option.text = loc;
  selLocation.append(option);
} // end for data.keys.

// Main

selLocation.addEventListener("change", function (event) {
  let key = selLocation.value;
  let locData = data.get(key);
  let card = createInfo(key, locData);
  setTimeout(function () {
    locationInfo.innerHTML = "";
    locationInfo.append(card);
  }, 100);
}); // end change event. 

locationInfo.addEventListener("click", function (event) {
  let place = event.target.getAttribute("data-place");
  if (!place) {
    return;
  } // end if.

  let locData = data.get(place);
  let card = createInfo(place, locData);
  locationInfo.innerHTML = "";
  locationInfo.append(card);
  card.querySelector("h1").focus();
  event.preventDefault();
}); // end click locationInfo.