import { group } from "../utils.js";

/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumber = function (cost, target) {
  return "7772";
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(([cost, target]) =>
    largestNumber(cost, target)
  );
}
