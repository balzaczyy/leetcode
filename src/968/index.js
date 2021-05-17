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
const minCameraCover = function (root) {
  /**
   * @param {TreeNode} t
   * @returns {boolean}
   */
  const hasChild = (t) => t.left || t.right;
  /**
   * @param {TreeNode} t
   * @returns {boolean}
   */
  const isL1 = (t) =>
    !(
      t !== null &&
      ((t.left && hasChild(t.left)) || (t.right && hasChild(t.right)))
    );

  if (isL1(root)) {
    return 1;
  }

  const q = [[root, null]];
  let ans = 0;
  for (let i = 0; i < q.length; i++) {
    const [t] = q[i];
    if (t.left) {
      if (isL1(t.left)) {
        ans++;
        t.val = 1;
      } else {
        q.push([t.left, t]);
      }
    }
    if (t.right) {
      if (isL1(t.right)) {
        ans++;
        t.val = 1;
      } else {
        q.push([t.right, t]);
      }
    }
  }

  while (q.length > 0) {
    const t = q.pop();
    if (t.val > 0) {
      continue;
    } // t.val === 0
    if ((t.left && t.left.val === 0) || (t.right && t.right.val === 0)) {
    }
  }
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(minCameraCover)
    .map((v) => JSON.stringify(v));
}
