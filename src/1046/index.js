/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  while (stones.length > 1) {
    // should use heap sort to obtain best performance
    // use qsort for easy implementation
    stones.sort((a, b) => b - a);
    const d = stones[0] - stones[1];
    if (d === 0) {
      stones.splice(0, 2);
    } else {
      stones.splice(0, 2, d);
    }
  }
  return stones[0] || 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(lastStoneWeight)
    .map((v) => JSON.stringify(v));
}
