import { group } from "../utils.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const swapNodes = function (head, k) {
  return head;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([head, k]) => swapNodes(head, k))
    .map((v) => JSON.stringify(v));
}
