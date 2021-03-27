import { group } from "../utils.js";

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = function (arr, target) {
  const modulo = 1000000007;
  arr.sort((a, b) => a - b);
  const freqs = new Map();
  for (const n of arr) {
    freqs.set(n, (freqs.get(n) || 0) + 1);
  }
  // console.log(freqs);
  let ans = 0;
  const len = arr.length;
  for (let i = 0; i < len - 2 && arr[i] <= target; i++) {
    for (let j = i + 1; j < len - 1 && arr[i] + arr[j] <= target; j++) {
      const d = target - arr[i] - arr[j];
      if (d < arr[j]) {
        break;
      } else if (d === arr[j]) {
        let count = 0;
        for (let k = j + 1; k < len && arr[k] === d; k++) {
          count++;
        }
        if (count > 0) {
          // console.log(arr[i], arr[j], d, count);
          ans = (ans + count) % modulo;
        }
      } else if (freqs.has(d)) {
        const count = freqs.get(d);
        // console.log(arr[i], arr[j], d, count);
        ans = (ans + count) % modulo;
      }
    }
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([arr, target]) => threeSumMulti(arr, target))
    .map(String);
}
