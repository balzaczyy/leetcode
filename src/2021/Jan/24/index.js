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
  let next = null,
    root = null;
  function push(val) {
    const node = new ListNode(val);
    if (root === null) {
      root = next = node;
    } else {
      next.next = node;
      next = node;
    }
  }

  let pipes = lists.filter(Boolean);
  while (pipes.length > 0) {
    pipes.sort((a, b) => a.val - b.val);
    push(pipes[0].val);
    pipes[0] = pipes[0].next;
    pipes = pipes.filter(Boolean);
  }
  return root;
};

export function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

export function arrayToListNode(arr) {
  let next = null;
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
