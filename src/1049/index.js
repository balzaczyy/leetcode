/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function (stones) {
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(lastStoneWeightII)
    .map((v) => JSON.stringify(v));
}
