/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { group } from "../utils.js";
import {
  arrayToListNode,
  ListNode,
  listNodeToArray,
} from "../2021/Jan/24/index.js";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  const l1r = listNodeReverse(l1);
  const l2r = listNodeReverse(l2);
  let carry = 0;
  let p = l1r,
    q = l2r,
    t = null,
    root;
  while (p != null && q != null) {
    const sum = p.val + q.val + carry;
    carry = Math.floor(sum / 10);
    if (t === null) {
      root = t = new ListNode(sum % 10);
    } else {
      t.next = new ListNode(sum % 10);
      t = t.next;
    }
    p = p.next;
    q = q.next;
  }

  function addRemaining(l) {
    while (l != null) {
      const sum = l.val + carry;
      carry = Math.floor(sum / 10);
      t.next = new ListNode(sum % 10);
      t = t.next;
      l = l.next;
    }
  }

  addRemaining(p);
  addRemaining(q);

  if (carry > 0) {
    t.next = new ListNode(carry);
    t = t.next;
  }

  return listNodeReverse(root);
};

export function listNodeReverse(root) {
  if (!root || !root.next) {
    return root;
  }
  let t = root,
    last = null;
  do {
    const next = t.next;
    t.next = last;
    last = t;
    t = next;
  } while (t != null);
  return last;
}

export default function run(input) {
  return group(input.map(JSON.parse).map(arrayToListNode), 2)
    .map(([l1, l2]) => addTwoNumbers(l1, l2))
    .map(listNodeToArray)
    .map((v) => JSON.stringify(v));
}
