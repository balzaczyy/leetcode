import { group } from "../utils.js";

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const sum = Array(10).fill(0);
  for (let i = 1; i < 10; i++) {
    sum[i] = sum[i - 1] + i;
  }
  const minPossible = sum[k];
  const maxPossible = sum[9] - sum[9 - k];
  if (n < minPossible || n > maxPossible) {
    // impossible
    return [];
  }

  const ans = [];
  const q = Array(k);
  function search(pos = 0, s = 0, prev = 0) {
    if (pos === k) {
      ans.push(q.slice());
      return;
    }

    for (let i = prev + 1; i <= 10 - k + pos; i++) {
      const minPossible = sum[i + k - pos - 1] - sum[i] + s + i;
      if (n < minPossible) {
        break;
      }
      const maxPossible = sum[9] - sum[10 - k + pos] + s + i;
      if (n > maxPossible) {
        continue;
      }
      q[pos] = i;
      search(pos + 1, s + i, i);
    }
  }
  search();
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([k, n]) => combinationSum3(k, n))
    .map((v) => JSON.stringify(v));
}
