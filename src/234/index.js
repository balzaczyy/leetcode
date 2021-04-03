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
  return false;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToListNode)
    .map(isPalindrome)
    .map(String);
}
