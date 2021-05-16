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
  return 0;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(minCameraCover)
    .map((v) => JSON.stringify(v));
}
