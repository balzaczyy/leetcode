import { group } from "../utils.js";

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

const makeArrayIncreasing = function (arr1, arr2) {
  // filter arr2 and remove elements that exist in arr1
  const values = arr1.reduce((acc, cur) => {
    acc.add(cur);
    return acc;
  }, new Set());
  const arr2f = arr2.filter((v) => !values.has(v));
  arr2f.sort((a, b) => a - b);

  // DP to calculate LIS
  const nextInArr2 = Array(arr1.length).fill(0);
  const ans = Array(arr1.length).fill(0);
  for (let i = 0; i < arr1.length - 1; i++) {
    for (let j = i + 1; j < arr1.length; j++) {
      if (arr1[j] > arr1[i]) {
        continue; // ok
      }
      let k = nextInArr2[i];
      if (i > 0) {
        while (k < arr2f.length && arr2f[k] <= arr1[i - 1]) {
          k++;
        }
        if (k === arr2f.length) {
          return -1;
        }
      }
      if (arr2f[k] < arr1[j]) {
        // found one match
        nextInArr2[j] = k;
        ans[j] = ans[i] + 1;
      } else {
        // have to change myself
        while (k < arr2f.length && arr2f[k] <= arr1[i]) {
          k++;
        }
        if (k === arr2f.length) {
          return -1;
        }
      }
    }
  }

  return -1;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([arr1, arr2]) => makeArrayIncreasing(arr1, arr2))
    .map(String);
}
