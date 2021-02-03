import { group } from "../utils.js";
import { arrayToListNode } from "../23/index.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
  if (head && head.next) {
    let runner = head.next;
    while (head && runner) {
      if (head === runner) {
        return true;
      }
      head = head.next;
      runner = runner.next?.next;
    }
  }
  return false;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([arr, pos]) => {
      const head = arrayToListNode(arr);
      if (pos >= 0) {
        let spot, tail;
        for (let t = head, i = 0; t != null; t = t.next, i++) {
          if (i === pos) {
            spot = t;
          }
          if (t.next === null) {
            tail = t;
          }
        }
        tail.next = spot;
      }
      return head;
    })
    .map(hasCycle)
    .map(String);
}
