/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { arrayToTree, treeToArray } from "../897/index.js";
import { group } from "../utils.js";

/**
 * @param {TreeNode} root
 * @param {number} low
 * @param {number} high
 * @return {TreeNode}
 */
const trimBST = function (root, low, high) {
  if (root === null) {
    return null;
  }

  const val = root.val;
  if (val < low) {
    return trimBST(root.right, low, high);
  } else if (val > high) {
    return trimBST(root.left, low, high);
  }

  root.left = trimBST(root.left, low, high);
  root.right = trimBST(root.right, low, high);
  return root;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([a, low, high]) => [arrayToTree(a), low, high])
    .map(([root, low, high]) => trimBST(root, low, high))
    .map((v) => treeToArray(v, true))
    .map((v) => JSON.stringify(v));
}
