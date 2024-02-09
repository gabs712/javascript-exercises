const palindromes = function (string) {
  let reversed = string.split('').reverse().join('')

  reversed = reversed.toLowerCase().replace(/[ ,.!?]/g, '')
  string = string.toLowerCase().replace(/[ ,.!?]/g, '')

  return reversed === string
};

// Do not edit below this line
module.exports = palindromes;
