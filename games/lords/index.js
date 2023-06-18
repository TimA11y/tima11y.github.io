// Import modules.
import { render } from "./reef.es.min.js";
import {DisplayCards, Select, sendMessage} from "./ui.mjs";
import { findCard, sortIntrigueCards, sortQuestCards } from "./utils.mjs";
import {intrigue_cards} from "./intrigue.mjs";
import {quest_cards} from "./quest.mjs";

// Data variables.
let state = {
  "quest": {
    "hand": [],
    "played": [],
  },
  "intrigue": {
    "hand": [],
    "played": [],
  }
};

// user Interface variables
const questDeck = document.querySelector("#questDeck");
const intrigueDeck = document.querySelector("#intrigueDeck");
const questHand = document.querySelector("#questHand");
const intrigueHand = document.querySelector("#intrigueHand");
const questPlayed = document.querySelector("#questPlayed");
const intriguePlayed = document.querySelector("#intriguePlayed");
const messages = document.querySelector("#messages");


// Main
quest_cards.sort(sortQuestCards);
intrigue_cards.sort(sortIntrigueCards);
render(questDeck, `<label>Quest Deck:${Select(quest_cards, "quest")}</label>`);
render(questHand, DisplayCards(state.quest.hand, "quest", "hand"));
render(intrigueHand, DisplayCards(state.intrigue.hand, "intrigue", "hand"));
render(questPlayed, DisplayCards(state.quest.played, "quest", "played"));
render(intriguePlayed, DisplayCards(state.intrigue.played, "intrigue", "played"));
render(intrigueDeck, `<label>Intrigue Deck:${Select(intrigue_cards, "intrigue")}</label>`)

document.body.addEventListener("click", function (event) {
  // return if no buttons were clicked.
  if (!event.target.closest("button")) {
    return;
  } // end if.

  let location = event.target.closest("[data-location]").getAttribute("data-location");
  let type = event.target.closest("[data-type").getAttribute("data-type");
  let moveTo = (["hand", "played"].includes(location))?event.target.closest("[data-moveTo]").getAttribute("data-moveTo"):"";
  let action = event.target.textContent.match(/Discard|Draw|Play/)[0].toLowerCase();;
  let value;
  let index;
  let card;
  switch (location) {
    case "deck":
      switch (type) {
        case "intrigue":
          value = intrigueDeck.querySelector("select").value;
          index = findCard(intrigue_cards, value, "intrigue");
          card = structuredClone(intrigue_cards[index]);
          state.intrigue.hand.push(card);
          sendMessage(`Drew ${value} intrigue card.`);
          break;
        case "quest":
          value = questDeck.querySelector("select").value;
          index = findCard(quest_cards, value, "quest");
          card = structuredClone(quest_cards[index]);
          state.quest.hand.push(card);
          sendMessage(`Drew ${value} quest card.`);
          break;
        default:
          //  No actions.
      } // end switch type.
      break;
    case "hand":
      value = event.target.closest("[data-name]").getAttribute("data-name");
      switch (type) {
        case "intrigue":
          index = findCard(state.intrigue.hand, value, "intrigue");
          card = state.intrigue.hand.splice(index, 1)[0];
          if (moveTo === "played") {
            state.intrigue.played.push(card);
          } // end if.
          sendMessage(`${action} ${value} intrigue card.`);
          break;
        case "quest":
          index = findCard(state.quest.hand, value, "quest");
          card = state.quest.hand.splice(index, 1)[0];
          if (moveTo === "played") {
            state.quest.played.push(card);
          } // end if.
          sendMessage(`${action} ${value} quest card.`);
          break;
        default:
          // No actions.
      } // end switch type.
      break;
    case "played":
      value = event.target.closest("[data-name]").getAttribute("data-name");
      switch (type) {
        case "intrigue":
          index = findCard(state.intrigue.played, value, "intrigue");
          state.intrigue.played.splice(index, 1);
          sendMessage(`Discard ${value} intrigue card.`);
          break;
        case "quest":
          index = findCard(state.quest.played, value, "quest");
          state.quest.played.splice(index, 1);
          sendMessage(`Discard ${value} quest card.`);
          break;
        default:
          // No actions.
      } // end switch type.

      break;
    default:
      // No actions.
  } // end switch location.

  state.intrigue.hand.sort(sortIntrigueCards);;
  state.quest.hand.sort(sortQuestCards);;
  state.intrigue.played.sort(sortIntrigueCards);
  state.quest.played.sort(sortQuestCards);
  

  render(questDeck, `<label>Quest Deck:${Select(quest_cards, "quest")}</label>`);
  render(intrigueDeck, `<label>Intrigue Deck:${Select(intrigue_cards, "intrigue")}</label>`)
  
  render(questHand, DisplayCards(state.quest.hand, "quest", "hand"));
  render(intrigueHand, DisplayCards(state.intrigue.hand, "intrigue", "hand"));

render(questPlayed, DisplayCards(state.quest.played, "quest", "played"));
render(intriguePlayed, DisplayCards(state.intrigue.played, "intrigue", "played"));

}); // end click event.