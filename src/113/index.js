import { arrayToTree, treeToArray } from "../897/index.js";

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
 * @return {void} Do not return anything, modify root in-place instead.
 */
const flatten = function (root) {
  if (root === null || (root.left === null && root.right === null)) {
    return;
  }
  flatten(root.left);
  flatten(root.right);
  if (root.left === null) {
    return;
  }
  function merge(a, b) {
    if (a.val <= b.val) {
      if (a.right === null) {
        a.right = b;
      } else {
        merge(a.right, b);
      }
    } else {
      const t = a.val;
      a.val = b.val;
      b.val = t;
      const next = b.right;
      b.right = a.right;
      a.right = b;
      if (next !== null) {
        merge(a.right, next);
      }
    }
  }
  const left = root.left;
  root.left = null;
  merge(root, left);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map((v) => {
      flatten(v);
      return v;
    })
    .map((v) => treeToArray(v, true))
    .map((v) => JSON.stringify(v));
}
