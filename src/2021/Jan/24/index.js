/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
const mergeKLists = function (lists) {
  return new ListNode(100);
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function arrayToListNode(arr) {
  let next = undefined;
  for (let i = arr.length - 1; i >= 0; i--) {
    next = new ListNode(arr[i], next);
  }
  return next;
}

function listNodeToArray(root) {
  const ans = [];
  let next = root;
  while (next) {
    ans.push(next.val);
    next = next.next;
  }
  return ans;
}

export default function run(input) {
  return input
    .map(JSON.parse)
    .map((v) => v.map(arrayToListNode))
    .map(mergeKLists)
    .map(listNodeToArray)
    .map((v) => JSON.stringify(v));
}
