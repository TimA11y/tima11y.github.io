let showDialog = document.querySelector("showDialog");
let dialog = document.querySelector("dialog");

showDialog.addEventListener("click", (event) => {
  console.log("show modal dialog.");
  dialog.showModal();
  dialog.querySelector("button").focus();
}); // end showDialog click.

