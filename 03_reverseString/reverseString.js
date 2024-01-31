const reverseString = function(string) {
  tempString = []
  for (let char of string) tempString.push(char)

  return tempString.reverse().join('')
};

// Do not edit below this line
module.exports = reverseString;
