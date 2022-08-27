let test1 = document.querySelector("#test1");
let test2 = document.querySelector("#test2");

/** 
 * Create an aria-live region, add it to the form, display a text message 1 ms afterwards, then remove the mesage after a few seconds.
 * @param {String} textMessage - the text message to be displayed.
 * @param {Number} delay - The number of milliseconds before the message disappears.
 * 
*/
function setStatusText (textMessage, delay = 5000) {
  let status = document.createElement("div");
  status.setAttribute("aria-live", "polite");
  test1.append(status);

  setTimeout(function () {
    status.textContent = textMessage;
  }, 1);

  setTimeout(function () {
    status.textContent = "";
  }, delay);
} // end setStatusText.

/** 
 * Create an aria-live region, add it to the form, display a element 1 ms afterwards, then remove the mesage after a few seconds.
 * @param {String} textMessage - the text message to be displayed.
 * @param {Number} delay - The number of milliseconds before the message disappears.
 * 
*/
function setStatusElement (textMessage, delay = 5000) {
  let status = document.createElement("div");
  status.setAttribute("aria-live", "polite");
  test1.append(status);

  setTimeout(function () {
    status.innerHTML = `<p>${textMessage}</p>`;
  }, 1);

  setTimeout(function () {
    status.innerHTML = "";
  }, delay);
} // end setStatusText.

test1.addEventListener("submit", function (event) {
  setStatusText("Now displaying the text!");
  event.preventDefault();
}); // end test1 submit.

test2.addEventListener("submit", function (event) {
  setStatusElement("Displaying a paragraph element with text inside it!");
  event.preventDefault();
}); // end test2 submit.