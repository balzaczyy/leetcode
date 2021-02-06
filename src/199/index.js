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
 * @return {number[]}
 */
const rightSideView = function (root) {
  const ans = [];
  function dfs(node = root, depth = 0) {
    if (node.left) {
      dfs(node.left, depth + 1);
    }
    ans[depth] = node.val;
    if (node.right) {
      dfs(node.right, depth + 1);
    }
  }
  if (root) {
    dfs();
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(rightSideView)
    .map((v) => JSON.stringify(v));
}
