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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  return head;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([head, x]) => partition(head, x))
    .map((v) => JSON.stringify(v));
}
