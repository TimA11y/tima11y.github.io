class RollDice extends HTMLElement {


  constructor() {
    super();
    let buttonLabel = (this.innerHTML) ? this.innerHTML.trim() : "Roll a dice!";
    this.innerHTML = `<p><button>${buttonLabel}</button></p><div aria-live="polite" class="message"></div>`;
  } // end constructor method.

  #roll() {
    return Math.floor((Math.random() * 6) + 1);
  } // end #roll method.

  #clickButton(event) {
    let parent = event.target.closest("roll-dice");
    let msg = parent.querySelector(".message");
    if (!msg) {
      return;
    } // end if.

    msg.innerHTML = `You rolled a ${parent.#roll()}!`;
  } // end #clickButton method.

  connectedCallback() {
    let btn = this.querySelector("button");
    if (!btn) {
      return;
    } // end if.

    btn.addEventListener("click", this.#clickButton);
  } // end connectedCallback.

  disconnectedCallback() {
    let btn = this.querySelector("button");
    if (!btn) {
      return;
    } // end if.

    btn.removeEventListener("click", this.#clickButton);

  } // end disconnectedCallback.

} // end RollDice class.

if ("customElements" in window) {
  customElements.define("roll-dice", RollDice);
} // end if.
