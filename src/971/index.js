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
  return [];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([root, voyage]) => flipMatchVoyage(arrayToTree(root), voyage))
    .map((v) => JSON.stringify(v));
}
