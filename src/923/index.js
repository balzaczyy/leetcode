import { group } from "../utils.js";

/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */
const threeSumMulti = function (arr, target) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(threeSumMulti).map(String);
}
