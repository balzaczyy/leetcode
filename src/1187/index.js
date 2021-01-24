import { group } from "../utils.js";

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number}
 */

const makeArrayIncreasing = function (arr1, arr2) {
  return -1;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([arr1, arr2]) => makeArrayIncreasing(arr1, arr2))
    .map(String);
}
