/**
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = function(n) {
  if (n === 0) {
    return 0;
  }
  return Math.floor(Math.sqrt(n));
};

export default function run(input) {
  return input.map(v => Number(v)).map(bulbSwitch).map(v => String(v));
}
