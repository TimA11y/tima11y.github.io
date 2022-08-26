let form = document.querySelector("#save-me");
let formKey = "autosave_fields";

/**
 * Serialize all form data into an object
 * @param  {FormData} data The FormData object to serialize
 * @return {String}        The serialized form data
 */
 function serialize (data) {
	let obj = {};
	for (let [key, value] of data) {
		if (obj[key] !== undefined) {
			if (!Array.isArray(obj[key])) {
				obj[key] = [obj[key]];
			}
			obj[key].push(value);
		} else {
			obj[key] = value;
		}
	}
	return obj;
} // end serialize.

/** 
 * Save the form data as the user enters information.
 * @param {event} event the event object.
*/
function saveInput (event) {

  // Serialize and then save data.
  let data = JSON.stringify(serialize(new FormData(form)));
  window.localStorage.setItem(formKey, data);

} // end saveInput function.

/** 
 * Delete the stored values and reset the form.
 * @param {event} event the event object.
*/
function clearInput (event) {
  // Remove local storage data.
  window.localStorage.removeItem(formKey);

  // clear out the fields and set focus to the first field in the form.
  let fields = form.elements;
  for (let field of fields) {
    field.value = "";
  } // end for fields.
  fields[0].focus();

} // end clearInput function.

/** 
 * Load the saved data from local storage.
 * 
*/
function loadData () {
  // Get the data and parse it.
  let data = JSON.parse(window.localStorage.getItem(formKey));
  // If there is no saved data, end this function.
  if (!data) {
    return;
  } // end if.

  // Load the data back into the form.
  let fields = form.elements;
  for (let field of fields) {
    if (!data[field.name]) {
      continue;
    } // end if.
    field.value = data[field.name];
  } // end for fields.
  
} // end loadData function.

/** 
 * Show a notification message for a brief period of time.
 * @param {String} message - the message that will be displayed.
 * @param {Number} displayTime - the length of time (in milliseconds) to display the message before erasing it.
*/
function showStatus (message, displayTime) {
  let notification = document.createElement("div");
  notification.setAttribute("aria-live", "polite")

  form.append(notification);

  setTimeout(function () {
    notification.textContent = message;
  }, 1);

  setTimeout(function () {
    notification.remove();
  }, displayTime);

} // end showStatus function.

loadData();

form.addEventListener("input", saveInput);
form.addEventListener("submit", function (event) {
  // clear out the form and set focus to the name field before display the notification.
  // This ensures the screen reader will read the notification.
  // When done the other way, the notification message is interrupted when the focus changes and the screen reader
  // reads the name of the input field that now has focus.
  clearInput();
  showStatus("Your information was saved successfully.", 5000);
  event.preventDefault();
});
