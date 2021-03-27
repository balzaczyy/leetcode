import { group } from "../utils.js";

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const advantageCount = function (A, B) {
  A.sort((a, b) => a - b);
  /**
   * find the lowest number that is larger than v
   * @param {number} v
   * @param {number} from
   * @param {number} to
   * @return {number}
   */
  function search(v, from, to) {
    while (A[from] < 0) from++;
    while (A[to] < 0) to--;
    if (v < A[from] || v >= A[to]) {
      return A.splice(from, 1)[0];
    }
    if (from + 1 === to) {
      return A.splice(to, 1)[0];
    }
    // now v in [A[from],A[to]) and at least 3 values do binary search
    const mid = Math.floor((from + to) / 2);
    const midV = A[mid];
    if (v >= midV) {
      return search(v, mid, to);
    }
    return search(v, from, mid);
  }
  return B.map((v) => search(v, 0, A.length - 1));
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([A, B]) => advantageCount(A, B))
    .map((v) => JSON.stringify(v));
}
