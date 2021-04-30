import { group } from "../utils.js";

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
const powerfulIntegers = function (x, y, bound) {
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([x, y, bound]) => powerfulIntegers(x, y, bound))
    .map((v) => JSON.stringify(v));
}
