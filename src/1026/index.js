import { arrayToTree } from "../897/index.js";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxAncestorDiff = function (root) {
  function search(root) {
    let min = root.val,
      max = root.val,
      diff = 0;
    if (root.left) {
      const [ld, lmin, lmax] = search(root.left);
      min = Math.min(min, lmin);
      max = Math.max(max, lmax);
      diff = Math.max(
        diff,
        Math.max(
          Math.abs(root.val - min),
          Math.max(Math.abs(root.val - max)),
          ld
        )
      );
    }
    if (root.right) {
      const [rd, rmin, rmax] = search(root.right);
      min = Math.min(min, rmin);
      max = Math.max(max, rmax);
      diff = Math.max(
        diff,
        Math.max(
          Math.abs(root.val - min),
          Math.max(Math.abs(root.val - max)),
          rd
        )
      );
    }
    return [diff, min, max];
  }
  const [diff] = search(root);
  return diff;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(maxAncestorDiff)
    .map(String);
}
