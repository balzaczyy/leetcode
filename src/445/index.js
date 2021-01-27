/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { group } from "../utils.js";
import { arrayToListNode, listNodeToArray } from "../2021/Jan/24/index.js";

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function (l1, l2) {
  return l1;
};

export default function run(input) {
  return group(input.map(JSON.parse).map(arrayToListNode), 2)
    .map(([l1, l2]) => addTwoNumbers(l1, l2))
    .map(listNodeToArray)
    .map((v) => JSON.stringify(v));
}
