import { group } from "../utils.js";

/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
  const perm = [1];
  let d = k;
  while (d >= 2) {
    const last = perm[perm.length - 1];
    perm.push(last + d);
    perm.push(last + 1);
    d -= 2;
  }
  if (d === 1) {
    perm.push(perm[perm.length - 1] + 1);
  }
  if (perm.length < n) {
    perm.push(k + 2);
    while (perm.length < n) {
      perm.push(perm[perm.length - 1] + 1);
    }
  }

  // console.log(perm);
  // const dd = new Set();
  // for (let i = 1; i < perm.length; i ++) {
  //   dd.add(Math.abs(perm[i-1] - perm[i]));
  // }
  // console.log(dd.size);
  // if (dd.size !== k) {
  //   throw new Error('impossible');
  // }
  return perm;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([n, k]) => constructArray(n, k))
    .map((v) => JSON.stringify(v));
}
