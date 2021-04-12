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
      return true;
    }
    diff = Math.max(1, diff);

    let next = perm[offset - 1] + diff;
    if (next <= n && !used.has(next)) {
      perm[offset] = next;
      used.add(next);
      if (search(offset + 1, diff - 1)) {
        return true;
      }
      used.remove(next);
    }

    next = Math.abs(perm[offset - 1] - diff);
    if (next <= n) {
      perm[offset] = next;
      used.add(next);
      if (search(offset + 1, diff - 1)) {
        return true;
      }
      used.remove(next);
    }

    return false;
  }
  for (let i = 1; i <= n; i++) {
    perm[0] = i;
    used.add(i);
    if (search(1, k)) {
      break;
    }
    used.remove(i);
  }
  return perm;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([n, k]) => constructArray(n, k))
    .map((v) => JSON.stringify(v));
}
