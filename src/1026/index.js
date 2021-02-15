/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { arrayToTree } from "../897/index.js";
/**
 * @param {TreeNode} root
 * @return {number}
 */
const maxAncestorDiff = function (root) {
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(maxAncestorDiff)
    .map(String);
}
