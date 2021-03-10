import { group } from "../utils.js";
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
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const addOneRow = function (root, v, d) {
  return root;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([a, v, d]) => {
      return [arrayToTree(a), v, d];
    })
    .map(([root, v, d]) => addOneRow(root, v, d))
    .map(treeToArray)
    .map((v) => JSON.stringify(v));
}
