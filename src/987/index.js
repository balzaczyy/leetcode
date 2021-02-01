import { arrayToTree } from "../897";

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const verticalTraversal = function (root) {
  const nodesByX = new Map();
  let minX = 0,
    maxX = 0;
  function record(point) {
    const x = point.x;
    minX = Math.min(minX, x);
    maxX = Math.max(maxX, x);
    let nodes = nodesByX.get(x);
    if (!nodes) {
      nodes = [];
      nodesByX.set(x, nodes);
    }
    nodes.push(point);
  }

  const q = [{ node: root, x: 0, y: 0 }];
  while (q.length > 0) {
    const { node, x, y } = q.shift();

    record({ value: node.val, x, y });
    if (node.left) {
      q.push({ node: node.left, x: x - 1, y: y - 1 });
    }
    if (node.right) {
      q.push({ node: node.right, x: x + 1, y: y - 1 });
    }
  }

  const ans = [];
  for (let i = minX; i <= maxX; i++) {
    const nodes = nodesByX.get(i);
    nodes.sort((a, b) => {
      const dy = b.y - a.y;
      if (dy !== 0) {
        return dy;
      }
      return a.value - b.value;
    });
    ans.push(nodes.map((v) => v.value));
  }
  return ans;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToTree)
    .map(verticalTraversal)
    .map((v) => JSON.stringify(v));
}
