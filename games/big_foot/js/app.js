import { data } from '../data.module.js';

// ── Derived constants ─────────────────────────────────────────────────────────

/** Ordered list of valid expedition suit names (from Expedition card definitions) */
const EXPEDITION_SUITS = data
  .filter(d => d.type === 'Expedition')
  .map(d => d.suit)
  .filter(s => s !== 'Bigfoot slash Yeti'); // not its own expedition

// ── Helpers ───────────────────────────────────────────────────────────────────

/** CSS modifier class for a card's type */
function typeClass(type) {
  return 'card--' + type.toLowerCase().replace(/\s+/g, '-');
}

/**
 * Human-readable label for a card definition.
Do you have a function for writing status messages?
 * Proof cards with a named proof include it: "Patterson Film (Bigfoot Proof)"
 * All others: "Bigfoot Expedition"
 */
function cardLabel(def) {
  if (def.proof) return `${def.proof} (${def.suit} Proof)`;
  return `${def.suit} ${def.type}`;
}

/** Simple plural helper */
function plural(n, word) {
  return `${n} ${word}${n === 1 ? '' : 's'}`;
}

/**
 * Sanitise a string for use as an HTML id attribute value.
 * Replaces non-alphanumeric chars with hyphens.
 */
function toId(str) {
  return str.replace(/[^a-z0-9]/gi, '-').toLowerCase();
}

// ── State ─────────────────────────────────────────────────────────────────────

/**
 * instances — array of runtime card instances.
 * Each instance: { id: number, defIndex: number, status: 'hand'|'table', assignedSuit: string|null }
 *
 * Multiple instances of the same definition can coexist.
 * Definitions in data[] are never mutated.
 */
let instances = [];
let selectedIds = new Set(); // IDs of checked hand instances
let nextId = 0;

/** Holds the resolve function of the currently open assign dialog promise. */
let assignResolve = null;

// ── DOM references ────────────────────────────────────────────────────────────

const browserList        = document.getElementById('card-browser-list');
const btnAddToHand       = document.getElementById('btn-add-to-hand');
const handList           = document.getElementById('hand-list');
const tableContent       = document.getElementById('table-content');
const statusEl           = document.getElementById('status-message');
const assignDialog       = document.getElementById('assign-dialog');
const assignOptions      = document.getElementById('assign-options');
const btnPlaySelected    = document.getElementById('btn-play-selected');
const btnDiscardSelected = document.getElementById('btn-discard-selected');
const btnAssignConfirm   = document.getElementById('btn-assign-confirm');
const btnAssignCancel    = document.getElementById('btn-assign-cancel');
const btnNewRound        = document.getElementById('btn-new-round');

// ── Status message ────────────────────────────────────────────────────────────

function setStatus(msg) {
    statusEl.textContent = " ";  
  statusEl.textContent = msg;
}

// ── Score ─────────────────────────────────────────────────────────────────────

function calcTotalScore() {
  return instances
    .filter(i => i.status === 'table')
    .reduce((sum, i) => sum + parseInt(data[i.defIndex].points, 10), 0);
}

// ── Expedition helpers ────────────────────────────────────────────────────────

/**
 * Returns all table instances whose effective suit matches the given suit.
 * Effective suit = assignedSuit (for Blurry Photo) or the card's own suit.
 */
function tableInstsBySuit(suit) {
  return instances.filter(
    i => i.status === 'table' &&
    (i.assignedSuit === suit || data[i.defIndex].suit === suit)
  );
}

// ── Render: Card Deck ────────────────────────────────────────────────────────

function renderBrowser() {
  const filter = document.querySelector('input[name="filter"]:checked')?.value ?? 'All';
  const defs   = (filter === 'All' ? data : data.filter(d => d.type === filter))
    .slice()
    .sort((a, b) => {
      const titleA = a.proof ? `${a.suit} — ${a.proof}` : a.suit;
      const titleB = b.proof ? `${b.suit} — ${b.proof}` : b.suit;
      return titleA.localeCompare(titleB);
    });

  // Preserve the selected index if possible
  const prevIndex = browserList.selectedIndex;

  browserList.innerHTML = '';
  defs.forEach(def => {
    const defIndex = data.indexOf(def);
    const opt      = document.createElement('option');
    opt.value       = defIndex;
    opt.textContent = def.proof
      ? `${def.suit} — ${def.proof} (${def.type}, ${def.points} pts)`
      : `${def.suit} (${def.type}, ${def.points} pts)`;
    browserList.appendChild(opt);
  });

  // Restore or default to first item
  browserList.selectedIndex = (prevIndex >= 0 && prevIndex < defs.length) ? prevIndex : 0;
}

// ── Render: Hand ──────────────────────────────────────────────────────────────

function renderHand() {
  const handInsts = instances.filter(i => i.status === 'hand');
  handList.innerHTML = '';

  if (handInsts.length === 0) {
    const li = document.createElement('li');
    li.className = 'empty-message';
    li.textContent = 'No cards in hand.';
    handList.appendChild(li);
    return;
  }

  handInsts.forEach(inst => {
    const def = data[inst.defIndex];
    const isPhenomenon = def.type === 'Phenomenon';

    const li = document.createElement('li');
    li.className = `card ${typeClass(def.type)}`;

    // Card title as a heading
    const heading = document.createElement('h3');
    heading.className = 'card__name';
    heading.textContent = def.suit + (def.proof ? ` — ${def.proof}` : '');
    li.appendChild(heading);

    // Expedition / Proof: checkbox for multi-select
    if (!isPhenomenon) {
      const lbl = document.createElement('label');
      lbl.className = 'card__select-label';

      const cb = document.createElement('input');
      cb.type = 'checkbox';
      cb.checked = selectedIds.has(inst.id);
      cb.addEventListener('change', () => {
        if (cb.checked) selectedIds.add(inst.id);
        else selectedIds.delete(inst.id);
      });

      const selectSpan = document.createElement('span');
      selectSpan.className = 'sr-only';
      selectSpan.textContent = def.suit + (def.proof ? ` — ${def.proof}` : '');

      lbl.append(cb, selectSpan);
      li.appendChild(lbl);
    }

    const typeEl = document.createElement('div');
    typeEl.className = 'card__type';
    typeEl.textContent = def.type;

    const ptsEl = document.createElement('div');
    ptsEl.className = 'card__points';
    ptsEl.textContent = `${def.points} pts`;

    const abilityEl = document.createElement('div');
    abilityEl.className = 'card__ability';
    abilityEl.textContent = def.ability || '(no ability)';

    li.append(typeEl, ptsEl, abilityEl);

    // Phenomenon: dedicated discard button (no checkbox, not in Play Selected)
    if (isPhenomenon) {
      const discardBtn = document.createElement('button');
      discardBtn.type = 'button';
      discardBtn.className = 'btn btn--discard';
      discardBtn.innerHTML = `Discard <span class="sr-only">${def.suit}</span>`;
      discardBtn.addEventListener('click', () => discardSingle(inst.id));
      li.appendChild(discardBtn);
    }

    handList.appendChild(li);
  });
}

// ── Render: Table ─────────────────────────────────────────────────────────────

function renderTable() {
  const tableInsts = instances.filter(i => i.status === 'table');
  tableContent.innerHTML = '';

  if (tableInsts.length === 0) {
    const p = document.createElement('p');
    p.className = 'empty-message';
    p.textContent = 'No expeditions on the table yet.';
    tableContent.appendChild(p);
    return;
  }

  // Group by effective suit
  const groups = new Map(); // suit → instance[]
  tableInsts.forEach(inst => {
    const suit = inst.assignedSuit ?? data[inst.defIndex].suit;
    if (!groups.has(suit)) groups.set(suit, []);
    groups.get(suit).push(inst);
  });

  groups.forEach((insts, suit) => {
    const headingId = `exp-${toId(suit)}`;
    const subtotal  = insts.reduce((s, i) => s + parseInt(data[i.defIndex].points, 10), 0);

    const section = document.createElement('section');
    section.setAttribute('aria-labelledby', headingId);
    section.className = 'expedition-column';

    const h3 = document.createElement('h3');
    h3.id = headingId;
    h3.textContent = `${suit} — ${subtotal} pts`;

    const ul = document.createElement('ul');
    ul.className = 'expedition-cards';

    insts.forEach(inst => {
      const def = data[inst.defIndex];
      const li  = document.createElement('li');
      li.className = `card ${typeClass(def.type)}`;

      const nameEl = document.createElement('div');
      nameEl.className = 'card__name';
      nameEl.textContent = def.suit + (def.proof ? ` — ${def.proof}` : '');

      const typeEl = document.createElement('div');
      typeEl.className = 'card__type';
      typeEl.textContent = def.type;

      const ptsEl = document.createElement('div');
      ptsEl.className = 'card__points';
      ptsEl.textContent = `${def.points} pts`;

      const discardBtn = document.createElement('button');
      discardBtn.type = 'button';
      discardBtn.className = 'btn btn--discard';
      discardBtn.innerHTML = `Discard <span class="sr-only">${cardLabel(def)}</span>`;
      discardBtn.addEventListener('click', () => discardFromTable(inst.id));

      li.append(nameEl, typeEl, ptsEl, discardBtn);
      ul.appendChild(li);
    });

    section.append(h3, ul);
    tableContent.appendChild(section);
  });
}

// ── Actions ───────────────────────────────────────────────────────────────────

/** Add the currently selected Card Deck item to the hand. */
function addSelectedToHand() {
  const opt = browserList.options[browserList.selectedIndex];
  if (!opt) { setStatus('No card selected in Card Deck.'); return; }
  addToHand(parseInt(opt.value, 10));
}

/** Add one instance of a card definition to the hand. */
function addToHand(defIndex) {
  const def = data[defIndex];
  instances.push({ id: nextId++, defIndex, status: 'hand', assignedSuit: null });
  setStatus(`${cardLabel(def)} added to hand.`);
  renderHand();
}

/** Discard a single Phenomenon instance from the hand. */
function discardSingle(id) {
  const inst = instances.find(i => i.id === id);
  const def  = data[inst.defIndex];
  instances  = instances.filter(i => i.id !== id);
  selectedIds.delete(id);
  setStatus(`${def.suit} discarded.`);
  renderHand();
}

/**
 * Play all checked Expedition/Proof instances to the table.
 * Opens the expedition picker modal once for the entire selection.
 * Phenomenon cards in the selection are silently discarded without opening the modal.
 */
async function handlePlaySelected() {
  const selected = instances.filter(i => selectedIds.has(i.id) && i.status === 'hand');

  if (selected.length === 0) {
    setStatus('No cards selected.');
    return;
  }

  const phenomena = selected.filter(inst => data[inst.defIndex].type === 'Phenomenon');
  const toPlay    = selected.filter(inst => data[inst.defIndex].type !== 'Phenomenon');

  // Open expedition picker only if there are non-Phenomenon cards to play
  let chosenSuit = null;
  if (toPlay.length > 0) {
    chosenSuit = await openAssignDialog();
    if (chosenSuit === null) return; // user cancelled — do nothing
  }

  const messages = [];

  // Discard Phenomenon cards
  for (const inst of phenomena) {
    const def = data[inst.defIndex];
    instances = instances.filter(i => i.id !== inst.id);
    selectedIds.delete(inst.id);
    messages.push(`${def.suit} played and discarded.`);
  }

  // Assign all non-Phenomenon cards to the chosen expedition
  if (chosenSuit !== null) {
    const countBefore = tableInstsBySuit(chosenSuit).length;
    for (const inst of toPlay) {
      inst.assignedSuit = chosenSuit;
      inst.status       = 'table';
      selectedIds.delete(inst.id);
    }
    const after = tableInstsBySuit(chosenSuit);
    const pts   = after.reduce((s, i) => s + parseInt(data[i.defIndex].points, 10), 0);
    if (countBefore === 0) {
      messages.push(
        `${chosenSuit} expedition started. (${plural(after.length, 'card')}, ${pts} pts)`
      );
    } else {
      messages.push(
        `${plural(toPlay.length, 'card')} added to ${chosenSuit} expedition. (${plural(after.length, 'card')}, ${pts} pts)`
      );
    }
  }

  if (messages.length > 0) {
    const total     = calcTotalScore();
    const handCount = instances.filter(i => i.status === 'hand').length;
    if (handCount === 0) messages.push('Your hand is now empty.');
    messages.push(`Total score: ${total} pts.`);
    setStatus(messages.join(' '));
  }

  renderHand();
  renderTable();
  btnPlaySelected.focus();
}
function handleDiscardSelected() {
  const selected = instances.filter(i => selectedIds.has(i.id) && i.status === 'hand');

  if (selected.length === 0) {
    setStatus('No cards selected.');
    return;
  }

  const ids = new Set(selected.map(i => i.id));
  instances = instances.filter(i => !ids.has(i.id));
  ids.forEach(id => selectedIds.delete(id));

  if (selected.length === 1) {
    setStatus(`${cardLabel(data[selected[0].defIndex])} discarded.`);
  } else {
    setStatus(`${plural(selected.length, 'card')} discarded.`);
  }

  const remaining = instances.filter(i => i.status === 'hand').length;
  if (remaining === 0) {
    setStatus(statusEl.textContent + ' Your hand is now empty.');
  }

  renderHand();
}

/** Discard a card directly from the table. */
function discardFromTable(id) {
  const inst = instances.find(i => i.id === id);
  const def  = data[inst.defIndex];
  instances  = instances.filter(i => i.id !== id);
  const total = calcTotalScore();
  setStatus(`${cardLabel(def)} discarded from table. Total score: ${total} pts.`);
  renderTable();
}

/** Clear all instances and reset to a fresh round. */
function handleNewRound() {
  if (!window.confirm('Start a new game? Your hand and table will be cleared.')) return;
  instances = [];
  selectedIds.clear();
  nextId = 0;
  setStatus('New game started. All cards returned to the catalog.');
  renderHand();
  renderTable();
}

// ── Card assignment modal ────────────────────────────────────────────────────

/**
 * Opens the expedition assignment dialog and returns a Promise that resolves
 * with the chosen expedition suit string, or null if the user cancelled.
 */
function openAssignDialog() {
  return new Promise(resolve => {
    assignResolve = resolve;

    // Which suits already have cards on the table?
    const onTableSuits = new Set(
      instances
        .filter(i => i.status === 'table')
        .map(i => i.assignedSuit ?? data[i.defIndex].suit)
    );

    // Populate <select> with all expedition suits
    assignOptions.innerHTML = '';
    EXPEDITION_SUITS.forEach(suit => {
      const opt = document.createElement('option');
      opt.value       = suit;
      opt.textContent = onTableSuits.has(suit) ? `${suit} (on table)` : suit;
      assignOptions.appendChild(opt);
    });
    assignOptions.selectedIndex = 0;

    assignDialog.showModal();
    assignOptions.focus();
  });
}

// Assign button
btnAssignConfirm.addEventListener('click', () => {
  const suit    = assignOptions.value || null;
  const resolve = assignResolve;
  assignResolve  = null;        // null out before close() triggers 'close' event
  assignDialog.close();
  if (resolve) resolve(suit);
});

// Cancel button
btnAssignCancel.addEventListener('click', () => {
  const resolve = assignResolve;
  assignResolve  = null;
  assignDialog.close();
  if (resolve) resolve(null);
});

// Handles the Escape key path (assignResolve is still set when Escape fires close)
assignDialog.addEventListener('close', () => {
  const resolve = assignResolve;
  assignResolve  = null;
  if (resolve) resolve(null);   // Escape = cancel
  btnPlaySelected.focus();      // return focus to triggering button
});

// ── Event listeners ───────────────────────────────────────────────────────────

btnAddToHand.addEventListener('click', addSelectedToHand);
btnPlaySelected.addEventListener('click', handlePlaySelected);
btnDiscardSelected.addEventListener('click', handleDiscardSelected);
btnNewRound.addEventListener('click', handleNewRound);

// Enter on the Card Deck select adds the selected item to hand
browserList.addEventListener('keyup', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    addSelectedToHand();
  }
});

document.querySelectorAll('input[name="filter"]').forEach(radio => {
  radio.addEventListener('change', renderBrowser);
});

// ── Initialise ────────────────────────────────────────────────────────────────

renderBrowser();
renderHand();
renderTable();
