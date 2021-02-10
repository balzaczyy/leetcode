/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
const copyRandomList = function (head) {
  const arr = nodeToArray(head);
  return arrayToNode(arr);
};

/**
 * @param {Array} arr
 * @return {Node|null}
 */
function arrayToNode(arr) {
  // generate node
  const nodes = arr.map(([val]) => new Node(val, null, null));
  // link to next
  nodes.forEach((v, i) => {
    if (i < nodes.length - 1) {
      v.next = nodes[i + 1];
    } else {
      v.next = null;
    }
  });
  // generate random pointer
  arr.forEach(([, random], i) => {
    if (random !== null) {
      nodes[i].random = nodes[random];
    }
  });
  return nodes.length > 0 ? nodes[0] : null;
}

/**
 * @param {Node|null} head
 * @return {Array}
 */
function nodeToArray(head) {
  const arr = [],
    revertIndex = new Map();
  let t = head,
    i = 0;
  while (t !== null) {
    revertIndex.set(t, i);
    arr.push([t.val, t.random]);
    t = t.next;
    i++;
  }
  arr.forEach((v) => {
    if (revertIndex.has(v[1])) {
      v[1] = revertIndex.get(v[1]);
    }
  });
  return arr;
}

function Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToNode)
    .map(copyRandomList)
    .map(nodeToArray)
    .map((v) => JSON.stringify(v));
}
