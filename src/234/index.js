import { arrayToListNode } from "../23/index.js";

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function (head) {
  let count = 0;
  for (let t = head; t != null; t = t.next) {
    count++;
  }
  if (count === 1) {
    return true;
  }

  let mid = head,
    last = null;
  for (let i = 0; i < count / 2; i++) {
    const t = mid;
    mid = mid.next;
    t.next = last;
    last = t;
  }
  if (count % 2 === 1) {
    last = last.next;
  }

  function match(a, b) {
    if (!a && !b) {
      return true;
    }
    if ((!a && b) || (a && !b)) {
      return false;
    }
    if (a.val !== b.val) {
      return false;
    }
    return match(a.next, b.next);
  }
  return match(mid, last);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToListNode)
    .map(isPalindrome)
    .map(String);
}
