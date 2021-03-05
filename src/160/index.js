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
  return headA;
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
