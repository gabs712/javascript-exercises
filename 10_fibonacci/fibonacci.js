const fibonacci = function(n = 1) {
  if (n == 0) return 0
  if (n < 0) return 'OOPS'

  let fibonacci = []
  for (let i = 0; i < n; i++) {
    if (i === 0 || i === 1) fibonacci.push(1)
    else  fibonacci.push(fibonacci[fibonacci.length -1] +
          fibonacci[fibonacci.length -2])
  }
  return fibonacci[fibonacci.length - 1]
}
// Do not edit below this line
module.exports = fibonacci;
