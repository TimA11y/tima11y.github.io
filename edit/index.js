let txtEdit = document.querySelector("#txtEdit");
let status = document.querySelector("#status");

let previousCharCount = 0;
let previousWordCount = 0;
let messageID;

/** 
 * Display the character and word count.
 * @param {Number} charCount - number of characters.
 * {Number} wordCount - number of words.
*/
let setStatus = function (message) {
  clearTimeout(messageID);
  messageID = setTimeout(function () {
    status.innerHTML = "";
    status.innerHTML = message;
  }, 250);
}; // end setStatus.

// Main.
txtEdit.addEventListener("input", function (event) {
  let text = txtEdit.value;

  let charCount = text.length;
  // Create a list of words.
  let words = text.split(/[\s]+/g).filter((word) => {
    return word.length;
  });
  let wordCount = words.length;

  if (previousCharCount !== charCount || previousCharCount !== wordCount) {
    setStatus(`${charCount} characters, ${wordCount} words`);
    previousCharCount = charCount;
    previousWordCount = wordCount;
  } // end if.
}); // end txtEdit input event.
