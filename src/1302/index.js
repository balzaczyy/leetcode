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
const deepestLeavesSum = function (root) {
  let q = [root],
    next = [];
  let ans;
  do {
    ans = 0;
    while (q.length > 0) {
      const node = q.shift();
      next.push(node.left, node.right);
      ans += node.val;
    }
    // console.log(ans);
    q = next.filter(Boolean);
    next = [];
  } while (q.length > 0);
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(deepestLeavesSum)
    .map(String);
}
