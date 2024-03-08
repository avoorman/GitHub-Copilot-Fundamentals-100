function calculadedNumbers(a, b) {
  return a + b;
}

function quadraticFormula(a, b, c) {
  const delta = Math.pow(b, 2) - 4 * a * c;
  const x1 = (-b + Math.sqrt(delta)) / (2 * a);
  const x2 = (-b - Math.sqrt(delta)) / (2 * a);
  return [x1, x2];
}

// Create a function that calculates the price of a vehicle based on gas mileage, year and number of miles driven.
function calculatePrice(mileage, year, miles) {
  const price = mileage * year * miles;
  return price;
}

