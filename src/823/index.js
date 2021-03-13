import { group } from "../utils.js";

/**
 * @param {number[]} arr
 * @return {number}
 */
const numFactoredBinaryTrees = function (arr) {
  const modulo = 1000000007;
  arr.sort((a, b) => a - b);
  let ans = 0;
  const counts = new Map();
  for (let i = 0; i < arr.length; i++) {
    let sum = 1;
    const v = arr[i];
    const limit = Math.sqrt(v);
    for (let j = 0; j < i && arr[j] <= limit; j++) {
      if (v % arr[j] === 0) {
        const other = v / arr[j];
        if (counts.has(other)) {
          let count = (counts.get(arr[j]) * counts.get(other)) % modulo;
          if (arr[j] !== other) {
            count = (count + count) % modulo;
          }
          sum = (sum + count) % modulo;
        }
      }
    }
    counts.set(v, sum);
    ans = (ans + sum) % modulo;
  }
  // console.log(counts);
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(numFactoredBinaryTrees).map(String);
}
