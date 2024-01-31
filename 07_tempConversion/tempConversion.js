const convertToCelsius = function(temp) {
  let formula = ((temp - 32) * 5 / 9)
  return formula ? +formula.toFixed(1) : 0
};

const convertToFahrenheit = function(temp) {
  let formula = ((temp * (9 / 5)) + 32)
  return +formula.toFixed(1) || 0
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
