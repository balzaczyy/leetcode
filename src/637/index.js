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
const averageOfLevels = function (root) {
  if (!root) {
    return [];
  }
  const q = [],
    ans = [];
  let next = [root],
    depth = 0;
  while (next.length > 0) {
    q.push(...next);
    next = [];
    ans[depth] = 0;
    let count = 0;
    while (q.length > 0) {
      const cur = q.shift();
      ans[depth] += cur.val;
      count++;
      if (cur.left) {
        next.push(cur.left);
      }
      if (cur.right) {
        next.push(cur.right);
      }
    }
    ans[depth] /= count;
    depth++;
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(averageOfLevels)
    .map((v) => JSON.stringify(v));
}
