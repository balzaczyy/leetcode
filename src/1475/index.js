/**
 * @param {number[]} prices
 * @return {number[]}
 */
const finalPrices = function (prices) {
  return prices.map((v, i) => {
    let j = i + 1;
    while (j < prices.length && prices[j] > prices[i]) {
      j++;
    }
    if (j === prices.length) {
      return v;
    }
    return v - prices[j];
  });
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(finalPrices)
    .map((v) => JSON.stringify(v));
}
