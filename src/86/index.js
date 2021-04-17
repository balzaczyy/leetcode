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
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
  const q = [];
  while (head && head.val < x) {
    q.push(head);
    head = head.next;
  }

  for (let t = head; t && t.next; ) {
    if (t.next.val < x) {
      q.push(t.next);
      t.next = t.next.next;
    } else {
      t = t.next;
    }
  }

  for (let i = 0; i < q.length - 1; i++) {
    q[i].next = q[i + 1];
  }

  if (q.length === 0) {
    return head;
  }
  q[q.length - 1].next = head;
  return q[0];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([head, x]) => partition(arrayToListNode(head), x))
    .map(listNodeToArray)
    .map((v) => JSON.stringify(v));
}
