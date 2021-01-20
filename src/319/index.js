let table;
let primes;

/**
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = function(n) {
  function destructure(n) {
    // n = 2^x * 3^y * ..., return [x,y,...]
  }
  const orders = destructure(n);
  const numFactors = orders.reduce((cur, acc) => {
    return cur * (acc + 1);
  }, 1);
  if ((numFactors & 1) === 1) {

  }
};

export default function run(input) {
  return input.map(v => Number(v)).map(bulbSwitch).map(v => String(v));
}
