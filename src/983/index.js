import { group } from "../utils.js";

/**
 * @param {number[]} days
 * @param {number[]} costs
 * @return {number}
 */
const mincostTickets = function (days, costs) {
  return 0;
};

export default function run(input) {
  return group(input.map(Number), 2)
    .map(([days, costs]) => mincostTickets(days, costs))
    .map(String);
}
