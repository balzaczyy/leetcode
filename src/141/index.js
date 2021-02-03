import { group } from "../utils.js";

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
  return true;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(hasCycle).map(String);
}
