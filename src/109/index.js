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
import { TreeNode, treeToArray } from "../897/index.js";

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const sortedListToBST = function (head) {
  function _sortedListToBST(head, len = -1) {
    if (len < 0) {
      len = 0;
      for (let t = head; t; t = t.next) {
        len++;
      }
    }
    if (len === 0) {
      return null;
    }
    const mid = Math.floor(len / 2);
    let t = head;
    for (let i = 0; i < mid; i++) {
      t = t.next;
    }
    const left = mid > 0 ? _sortedListToBST(head, mid) : null;
    const right = mid < len ? _sortedListToBST(t.next, len - 1 - mid) : null;
    return new TreeNode(t.val, left, right);
  }
  return _sortedListToBST(head);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToListNode)
    .map(sortedListToBST)
    .map((v) => treeToArray(v, true))
    .map((v) => JSON.stringify(v));
}
