import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
  const perm = Array(n);
  const used = new Set();
  function search(offset, diff) {
    if (offset === n) {
      return used.size === n;
    }
    const [low, high] = (() => {
      return diff > 0 ? [diff, diff] : [1, k];
    })();
    diff = Math.max(1, diff);

    for (let i = low; i <= high; i++) {
      let next = perm[offset - 1] + i;
      if (next <= n && !used.has(next)) {
        perm[offset] = next;
        used.add(next);
        if (search(offset + 1, diff - 1)) {
          return true;
        }
        used.delete(next);
      }

      next = Math.abs(perm[offset - 1] - i);
      if (next >= 1 && next <= n && !used.has(next)) {
        perm[offset] = next;
        used.add(next);
        if (search(offset + 1, diff - 1)) {
          return true;
        }
        used.delete(next);
      }
    }

    return false;
  }
  for (let i = 1; i <= n; i++) {
    perm[0] = i;
    used.add(i);
    if (search(1, k)) {
      break;
    }
    used.delete(i);
  }
  // console.log(perm);
  // const dd = new Set();
  // for (let i = 1; i < perm.length; i ++) {
  //   dd.add(Math.abs(perm[i-1] - perm[i]));
  // }
  // console.log(dd.size);
  return perm;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([n, k]) => constructArray(n, k))
    .map((v) => JSON.stringify(v));
}
