// Greenleaze variables

let init = false;

let initPrice = false;
var monthValues = [1, 12, 24, 36];
var rawrules = {};
var formated = {};
var priceRules = [];
let isCart = false;

const greenleazePriceActualize = new Event("greenleazePriceActualize");
// Greenleaze functions
function parseRule(rule, values) {
  return new Function(
    "return " + rule.replace(/\[\[(\w+)\]\]/g, (_, key) => values[key])
  );
}

function getRuleByProductPriceAndDuration(productPrice, duration = 36) {
  productPriceFormat = parseFloat(productPrice);
  const rule = priceRules.find(
    (priceRule) =>
      priceRule.duration == duration &&
      priceRule.minPrice <= productPriceFormat &&
      priceRule.maxPrice >= productPriceFormat
  );
  return rule ? rule.rule : "0.00";
}

async function setBackgroundSlider(slider) {
  const progress = (slider.value / slider.max) * 100;
  slider.style.background = `linear-gradient(to right, #0c5537 ${progress}%, #d0e6e5 ${progress}%)`;
}
async function getAllPriceRules() {
  const rulesFetch = await fetch("/apps/greenleaze-proxy/pricing", {
    method: "GET",
    headers: {
      "ngrok-skip-browser-warning": "true",
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
  });
  rawrules = await rulesFetch.json();
  priceRules = rawrules;
  initPrice = true;
  console.log("GREENLEAZE INITIALIZED");
  window.dispatchEvent(greenleazePriceActualize);
}

function setButtonLoading(selector, active) {
  const button = document.querySelector(selector);
  if (active) {
    button.disabled = true;
    // add spinner
    button.classList.add("button--loading");
  } else {
    button.classList.remove("button--loading");
    button.disabled = false;
  }
}

async function initGreenleaze() {
  console.log("INITIALIAZING GREENLEAZE");
  init = true;
  await getAllPriceRules();
}
if (!init) initGreenleaze();
