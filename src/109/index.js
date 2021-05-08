/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
import { arrayToListNode } from "../23/index.js";
import { treeToArray } from "../897/index.js";

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  return null;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToListNode)
    .map(sortedListToBST)
    .map(treeToArray)
    .map((v) => JSON.stringify(v));
}
