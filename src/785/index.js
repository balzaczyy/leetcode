import { group } from "../utils.js";

/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isBipartite).map(String);
}
