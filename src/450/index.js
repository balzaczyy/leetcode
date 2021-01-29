import { arrayToTree, treeToArray } from "../897/index.js";
import { group } from "../utils.js";

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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  return root;
};

export default function run(input) {
  return group(
    input.map(JSON.parse).map((v, i) => {
      if (i % 2 === 0) {
        return arrayToTree(v);
      }
      return Number(v);
    }),
    2
  )
    .map(([root, key]) => deleteNode(root, key))
    .map(treeToArray)
    .map(JSON.stringify);
}
