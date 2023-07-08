// Import modules;
import { render } from "./reef.es.min.js";
import { game_data } from "./data.mjs";
import { parseCommand, add, buy, discard, reserve} from "./utils.mjs";
import {Card, CardList, sendMessage} from "./ui.mjs";
// User Interface variables.
const nodeNoble = document.querySelector("#noble");
const nodeArtisan = document.querySelector("#artisan");
const nodeTransport = document.querySelector("#transport");
const nodeMine = document.querySelector("#mine");
const nodeReserve = document.querySelector("#reserve");
const nodePurchase = document.querySelector("#purchase");
const form = document.querySelector("form");
const nodeCommand = document.querySelector("#command");
const messageNode = document.querySelector("#message");

// Main
render(nodeNoble, CardList(game_data.noble));
render(nodeArtisan, CardList(game_data.artisan));
render(nodeTransport, CardList(game_data.transport));
render(nodeMine, CardList(game_data.mine));
render(nodeReserve, CardList(game_data.reserve));
render(nodePurchase, CardList(game_data.purchase));


form.addEventListener("submit", function (event) {
  event.preventDefault();
  
  let parsed_cmd = parseCommand(nodeCommand.value);
  switch (parsed_cmd.action) {
    case "add":
      add(parsed_cmd, game_data);
      sendMessage(`Added ${parsed_cmd.type}`, messageNode);
      break;
    case "buy":
      buy(parsed_cmd, game_data);
      sendMessage(`Bought ${parsed_cmd.type}`, messageNode);
      break;
    case "discard":
      discard(parsed_cmd, game_data);
      sendMessage(`Discarded ${parsed_cmd.type}`, messageNode);
      break;
    case "reserve":
      reserve(parsed_cmd, game_data);
      sendMessage(`Reserved ${parsed_cmd.type}`, messageNode);
      break;
    default:
      // no actions.
  } // end switch parsed_cmd.action.
  
  render(nodeNoble, CardList(game_data.noble));
  render(nodeArtisan, CardList(game_data.artisan));
  render(nodeTransport, CardList(game_data.transport));
  render(nodeMine, CardList(game_data.mine));
  render(nodeReserve, CardList(game_data.reserve));
  render(nodePurchase, CardList(game_data.purchase));

  nodeCommand.value = "";
  nodeCommand.focus();
}); // end submit event.