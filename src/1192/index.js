import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number[][]} connections
 * @return {number[][]}
 */
const criticalConnections = function (n, connections) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([n, connections]) => criticalConnections(n, connections))
    .map((v) => JSON.stringify(v));
}
