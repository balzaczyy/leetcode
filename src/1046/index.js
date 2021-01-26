/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(lastStoneWeight)
    .map((v) => JSON.stringify(v));
}
