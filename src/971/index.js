import { group } from "../utils.js";
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
 * @param {number[]} voyage
 * @return {number[]}
 */
const flipMatchVoyage = function (root, voyage) {
  const ans = [];
  function match(node, offset) {
    if (!node) {
      return offset;
    }
    if (node.val !== voyage[offset]) {
      return -1;
    }
    if (!node.left && !node.right) {
      return offset + 1;
    }
    if (node.left && voyage[offset + 1] === node.left.val) {
      const next = match(node.left, offset + 1);
      if (next) {
        return match(node.right, next);
      }
    }
    if (node.right && voyage[offset + 1] === node.right.val) {
      if (node.left) {
        ans.push(node.val);
      }
      const next = match(node.right, offset + 1);
      if (next) {
        return match(node.left, next);
      }
    }
    return -1;
  }
  if (match(root, 0) < voyage.length) {
    return [-1];
  }
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([root, voyage]) => flipMatchVoyage(arrayToTree(root), voyage))
    .map((v) => JSON.stringify(v));
}
