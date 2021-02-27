import { group } from "../utils.js";

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
  function floor(n) {
    return n >= 0 ? Math.floor(n) : -floor(-n);
  }
  return Math.min(2147483647, floor(dividend / divisor));
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([dividend, divisor]) => divide(dividend, divisor))
    .map(String);
}
