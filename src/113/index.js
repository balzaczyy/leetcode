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
  function _flatten(root) {
    if (root === null || (root.left === null && root.right === null)) {
      return root;
    }
    const leftTail = _flatten(root.left);
    const rightTail = _flatten(root.right);
    if (leftTail === null) {
      return rightTail;
    }
    leftTail.right = root.right;
    root.right = root.left;
    root.left = null;
    return rightTail === null ? leftTail : rightTail;
  }
  _flatten(root);
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
