/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  return prices;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(finalPrices)
    .map((v) => JSON.stringify(v));
}
