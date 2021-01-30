/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeightII = function (stones) {
  const sum = stones.reduce((acc, cur) => acc + cur);
  const target = Math.floor(sum / 2);
  const f = Array(target + 1);
  for (let i = 0; i < stones.length; i++) {
    for (let l = target; l >= stones[i]; l--) {
      if ((f[l - stones[i]] || 0) + stones[i] > (f[l] || 0)) {
        f[l] = (f[l - stones[i]] || 0) + stones[i];
      }
    }
  }
  // console.log(target, f);
  return Math.abs(sum - f[target] * 2);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(lastStoneWeightII)
    .map((v) => JSON.stringify(v));
}
