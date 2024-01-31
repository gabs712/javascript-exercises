const sumAll = function(n1, n2) {
  if (typeof n1 !== 'number' || typeof n2 !== 'number' || n1 < 0 || n2 < 0) {
    return 'ERROR'
  }
  if (n1 > n2) {
    [n1, n2] = [n2, n1]
  }

  let finalSum = 0
  for (let i = n1; i <= n2; i++) {
    finalSum += i
  }
  return finalSum
};
// Do not edit below this line
module.exports = sumAll;
