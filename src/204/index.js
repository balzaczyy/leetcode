/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(countPrimes).map(String);
}
