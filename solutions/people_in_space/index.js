let spacers = document.querySelector("#spacers tbody");

let getSpacers = async function () {
  let tbody = "";
  try {
    let response = await fetch("http://api.open-notify.org/astros.json");
    if (!response.ok) {
      throw response.status;
    } // end if.
    let data = await response.json();
    for (let person of data.people) {
      tbody += `<tr><th scope="row">${person.name}</th><td>${person.craft}</td></tr>`
    } // end for person of data.people.
    if (data.people.length === 0) {
      tbody = `<tr><td colspan="2">No one is currently in space.</td></tr>`;
    } // end if.
  } catch (error) {
    tbody = `<tr><td colspan="2">Unable to retrieve the information.</td></tr>`;
  } // end try catch.
  spacers.innerHTML = tbody;
}; // end getSpacers.

getSpacers();