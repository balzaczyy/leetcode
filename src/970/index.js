import { group } from "../utils.js";

/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
const powerfulIntegers = function (x, y, bound) {
  if (x > y) {
    return powerfulIntegers(y, x, bound);
  }
  const yc = new Set();
  for (let i = 1; i <= bound; i *= y) {
    yc.add(i);
    if (y === 1) {
      break;
    }
  }
  const ans = [];
  for (let i = 2; i <= bound; i++) {
    for (let j = 1; j < i; j *= x) {
      const rem = i - j;
      if (yc.has(rem)) {
        ans.push(i);
        // console.log(i, '=', j, '+', rem);
        break;
      }
      if (x === 1) {
        break;
      }
    }
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([x, y, bound]) => powerfulIntegers(x, y, bound))
    .map((v) => JSON.stringify(v));
}
