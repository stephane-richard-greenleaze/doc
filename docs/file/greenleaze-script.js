window.greenleazeScript = true;

// Greenleaze variables
let init = false;

let initPrice = false;
var monthValues = [1, 12, 24, 36];
var rawrules = {};
var formated = {};
var priceRules = [];
let isCart = false;
let tva = 1.2;
let trackingId = null;

const greenleazePriceActualize = new Event("greenleazePriceActualize");
// Greenleaze functions
function parseRule(rule, values) {
  return new Function(
    "return " + rule.replace(/\[\[(\w+)\]\]/g, (_, key) => values[key])
  );
}

function getAllPricesForProduct(productPriceHT) {
  const result = {};
  for (const month of monthValues) {
    result[month] = getRuleByProductPriceAndDuration(productPriceHT, month);
  }
  return result;
}

function getRuleByProductPriceAndDuration(productPriceHT, duration = 36) {
  if (!monthValues.includes(duration))
    duration = monthValues[monthValues.length - 1];
  productPriceFormat = parseFloat(productPriceHT);
  const rule = priceRules.find(
    (priceRule) =>
      priceRule.duration == duration &&
      priceRule.minPrice <= productPriceFormat &&
      priceRule.maxPrice >= productPriceFormat
  );
  if (!rule) {
    console.error("No price rule found", priceRules);
    getAllPriceRules();
    return null;
  }
  const monthlyRule = parseRule(rule.rule, { tva, prixHT: productPriceHT });
  const depositRule = parseRule(rule.depositRule, {
    tva,
    prixHT: productPriceHT,
  });
  return rule
    ? {
        monthly: monthlyRule(),
        initial: depositRule(),
      }
    : { monthly: "0.00", initial: "0.00" };
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
  const uniqueDurations = new Set();
  for (let index = 0; index < priceRules.length; index++) {
    uniqueDurations.add(priceRules[index].duration);
  }
  monthValues = [...uniqueDurations].sort(function (a, b) {
    return a - b;
  });
  initPrice = true;
  console.log("GREENLEAZE INITIALIZED");
  window.dispatchEvent(greenleazePriceActualize);
  // REFRESH EVENTS
  document.addEventListener("on:cart:add", function (event) {
    console.log("product added");
    setTimeout(() => window.dispatchEvent(greenleazePriceActualize), 1500);
  });
  document.addEventListener("on:line-item:change", function (event) {
    console.log("product changed");
    setTimeout(() => window.dispatchEvent(greenleazePriceActualize), 1500);
  });
  document.addEventListener("dispatch:cart-drawer:refresh", function (event) {
    console.log("dispatch:cart-drawer:refresh");
    setTimeout(() => window.dispatchEvent(greenleazePriceActualize), 1500);
  });
  document.addEventListener("on:cart:error", function (event) {
    console.log("on:cart:error");
    setTimeout(() => window.dispatchEvent(greenleazePriceActualize), 1500);
  });
}

async function addTo(variantId, quantity) {
  var data = {
    id: variantId, // Id of the variant
    quantity: quantity, // Quantity
  };

  try {
    let response = await fetch("/cart/add.js", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Error during request: " + response.statusText);
    }

    // Wait for the response to be converted to JSON
    let responseData = await response.json();
  } catch (error) {
    console.error("Erreur:", error);
  }
}

async function sendCartAndRedirect(duration, variantId, pdistinctId) {
  let cartContentsRes = await fetch(window.Shopify.routes.root + "cart.js");
  let cartContents = await cartContentsRes.json();
  if (variantId) {
    const hasVariantId = cartContents.items.some(
      (item) => item.variant_id == variantId
    );
    if (!hasVariantId) {
      await addTo(variantId, 1);
      console.log("");
      cartContentsRes = await fetch(window.Shopify.routes.root + "cart.js");
      console.log("");
      // Wait a few seconds so automatic products are added to the cart
      // await new Promise((resolve) => setTimeout(resolve, 1000));
      cartContents = await cartContentsRes.json();
    }
  }
  if (!trackingId)
    trackingId =
      window.ShopifyAnalytics?.lib?.user?.()?.traits?.()?.uniqToken ||
      self?.crypto?.randomUUID?.();
  let ack = await fetch("/apps/greenleaze-proxy/send-card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify({
      cartContents: JSON.stringify(cartContents),
      duration: duration,
      trackingId: trackingId,
      trackingData: null,
      postHogtrackingId: pdistinctId,
    }),
  });
  if (ack.ok) {
    ack = await ack.json();
    if (ack?.message) {
      console.error(ack?.message);
    }
    if (ack?.redirectUrl) {
      window.location.href = ack?.redirectUrl + "&duration=" + duration;
    }
  } else {
    console.error("Une erreur s'est produite.");
    console.error("error during saved ", ack);
  }
  return true;
}

async function initGreenleaze() {
  console.log("INITIALIAZING GREENLEAZE");
  init = true;
  await getAllPriceRules();
}

if (!init) initGreenleaze();
