import { group } from "../utils.js";
import { arrayToTree, TreeNode, treeToArray } from "../897/index.js";

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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function (root, v, d) {
  if (d === 1) {
    return new TreeNode(v, root);
  }
  let q = [root],
    next = [];
  for (let depth = 1; depth < d; depth++) {
    if (depth === d - 1) {
      q.forEach((node) => {
        node.left = new TreeNode(v, node.left);
        node.right = new TreeNode(v, null, node.right);
      });
    } else {
      q.forEach((node) => {
        if (node.left) {
          next.push(node.left);
        }
        if (node.right) {
          next.push(node.right);
        }
      });
      q = next;
      next = [];
    }
  }
  return root;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([a, v, d]) => {
      return [arrayToTree(a), v, d];
    })
    .map(([root, v, d]) => addOneRow(root, v, d))
    .map((t) => treeToArray(t, true))
    .map((v) => JSON.stringify(v));
}
