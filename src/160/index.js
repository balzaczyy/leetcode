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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
  /**
   * @param {ListNode} head
   * @returns {number}
   */
  function length(head) {
    let n = 0;
    while (head !== null) {
      n++;
      head = head.next;
    }
    return n;
  }

  /**
   * @param {ListNode} head
   * @param {number} steps
   * @returns {ListNode}
   */
  function skip(head, steps) {
    for (let i = 0; i < steps; i++) {
      head = head.next;
    }
    return head;
  }

  const lenA = length(headA);
  const lenB = length(headB);
  if (lenA > lenB) {
    headA = skip(headA, lenA - lenB);
  } else if (lenA < lenB) {
    headB = skip(headB, lenB - lenA);
  }
  while (headA !== null && headB !== null && headA !== headB) {
    headA = headA.next;
    headB = headB.next;
  }
  if (headA && headB && headA === headB) {
    return headA;
  }
  return null;
};

export default function run(input) {
  return group(input.map(JSON.parse), 5)
    .map(([intersectVal, listA, listB, skipA, skipB]) => {
      const hA = arrayToListNode(listA);
      const hB = arrayToListNode(listB);
      if (intersectVal > 0) {
        let t1 = hA;
        while (skipA > 1) {
          t1 = t1.next;
          skipA--;
        }
        let t2 = hB;
        while (skipB > 1) {
          t2 = t2.next;
          skipB--;
        }
        if (t1.next.val !== intersectVal || t2.next.val !== intersectVal) {
          throw new Error("impossible");
        }
        t2.next = t1.next;
      }
      return [hA, hB];
    })
    .map(([headA, headB]) => getIntersectionNode(headA, headB))
    .map((head) => (head === null ? "null" : String(head.val)));
}
