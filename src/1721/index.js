import { group } from "../utils.js";
import { arrayToListNode, listNodeToArray } from "../23/index.js";

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
  let count = 0;
  let t = head;
  for (let i = 0; i < k - 1; i++) {
    t = t.next;
    count++;
  }
  const p = t;
  while (t != null) {
    t = t.next;
    count++;
  }
  t = head;
  for (let i = 0; i < count - k; i++) {
    t = t.next;
  }
  if (p !== t) {
    const temp = p.val;
    p.val = t.val;
    t.val = temp;
  }

  return head;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([a, b]) => [arrayToListNode(a), b])
    .map(([head, k]) => swapNodes(head, k))
    .map((v) => listNodeToArray(v))
    .map((v) => JSON.stringify(v));
}
