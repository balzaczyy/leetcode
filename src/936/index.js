import { group } from "../utils.js";

/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
const movesToStamp = function (stamp, target) {
  return [];
};

export default function run(input) {
  return group(input, 2)
    .map(([stamp, target]) => movesToStamp(stamp, target))
    .map((v) => JSON.stringify(v));
}
