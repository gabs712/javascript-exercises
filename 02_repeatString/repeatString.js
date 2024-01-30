const repeatString = function(string, repeat) {
  if (repeat < 0) return 'ERROR'

  let alteredString = ''
  for (let i = 0; i < repeat; i++) {
    alteredString += string
  }
  return alteredString
};

// Do not edit below this line
module.exports = repeatString;
