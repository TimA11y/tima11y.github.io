class RollDice extends HTMLElement {
  constructor() {
    super();
    let buttonLabel = (this.innerHTML) ? this.innerHTML : "Roll a dice!";
    this.innerHTML = `
    <p>
      <button>${buttonLabel}</button>
    </p>
    <div class="message" aria-live="polite"></div>`;
  } // end constructor method.
} // end RollDice class.

if ("customElements" in window) {
  customElements.define("roll-dice", RollDice);
} // end if.