export const currencies = {
  INR: { symbol: "₹", rate: 1, label: "INR (₹)", locale: "en-IN" },
  USD: { symbol: "$", rate: 0.012, label: "USD ($)", locale: "en-US" },
  AED: { symbol: "AED ", rate: 0.044, label: "AED (د.إ)", locale: "en-AE" },
  EUR: { symbol: "€", rate: 0.011, label: "EUR (€)", locale: "de-DE" }
};

export function formatPrice(amountINR, currencyKey = "INR") {
  const curr = currencies[currencyKey] || currencies.INR;
  const converted = Math.round(amountINR * curr.rate);
  
  if (currencyKey === "INR") {
    return "₹" + converted.toLocaleString("en-IN");
  } else if (currencyKey === "USD") {
    return "$" + converted.toLocaleString("en-US");
  } else if (currencyKey === "EUR") {
    return "€" + converted.toLocaleString("de-DE");
  } else {
    return "AED " + converted.toLocaleString("en-AE");
  }
}
