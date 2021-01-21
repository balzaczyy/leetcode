import { group } from "../455/index.js";

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var crackSafe = function (n, k) {
  var ans = 1;
  for (let i = 0; i < n; i++) {
    ans *= k;
  }
  var len = ans - k * n - 1;
  var r = "";
  for (var i = 0; i < len; i++) {
    r += "0";
  }
  return r;
};

export default function run(input) {
  return group(input.map(Number), 2).map(([n, k]) => crackSafe(n, k));
}
