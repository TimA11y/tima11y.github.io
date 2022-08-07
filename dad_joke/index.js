let joke = document.querySelector("#joke");
let button = document.querySelector("#newJoke");
let history = [];

let getJoke = async function () {
  try {
    let response = await fetch("https://icanhazdadjoke.com/", {headers: {"Accept": "application/json"}});
    if (!response.ok) {
      throw response.status;
    } // end if.
    let data = await response.json();
    if (history.includes(data.joke)) {
      getJoke();
      return;
    } // end if.
    joke.textContent = data.joke;
    history.push(data.joke);
    if (history.length > 49) {
      history.shift();
    } // end if.
  } catch (error) {
    joke.textContent = "Something went wrong and... Maybe we finally ran out of dad jokes? Thank heavens!";
  }
}; // end getJoke function.

getJoke();

button.addEventListener("click", getJoke);