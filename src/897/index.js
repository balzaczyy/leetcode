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
 * @return {TreeNode}
 */
const increasingBST = function(root) {
  function gen(root) {
    let rStart = root, rEnd = root;
    if (root.left) {
      const { start, end } = gen(root.left);
      rStart = start;
      end.right = root;
      root.left = null;
    }
    if (root.right) {
      const { start, end } = gen(root.right);
      rEnd = end;
      root.right = start;
    }
    return {
      start: rStart,
      end: rEnd,
    }
  }
  const { start } = gen(root);
  return start;
};

function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function arrayToTree(arr) {
  const root = new TreeNode(arr[0]);
  const q = [root];
  let pos = 1;
  while (pos < arr.length) {
    const node = q.shift();
    const left = arr[pos++];
    if (left !== null) {
      const leftNode = new TreeNode(left);
      node.left = leftNode;
      q.push(leftNode);
    }
    const right = arr[pos++];
    if (right !== null) {
      const rightNode = new TreeNode(right);
      node.right = rightNode;
      q.push(rightNode);
    }
  }
  return root;
}

function treeToArray(root) {
  const q = [root];
  const arr = [];
  while (q.length > 0) {
    const node = q.shift();
    if (node) {
      arr.push(node.val);
      if (node.left || node.right) {
        q.push(node.left);
        q.push(node.right);
      }
    } else {
      arr.push(null);
    }
  }
  return arr;
}

export default function run(input) {
  return input.map(JSON.parse)
    .map(arrayToTree)
    .map(increasingBST)
    .map(treeToArray)
    .map(JSON.stringify);
}