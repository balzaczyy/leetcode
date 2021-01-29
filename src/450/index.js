import { arrayToTree, TreeNode, treeToArray } from "../897/index.js";
import { group } from "../utils.js";

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
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
  function _deleteNode(parent, node, isLeft) {
    if (node.right) {
      // try pull from right child
      let next = node.right,
        p = node;
      if (next.left) {
        while (next.left) {
          p = next;
          next = next.left;
        }
        node.val = next.val;
        _deleteNode(p, next, true);
      } else {
        node.val = t.right.val;
        node.right = t.right.right;
      }
    } else if (node.left) {
      let next = node.left,
        p = node;
      if (next.right) {
        while (next.right) {
          p = next;
          next = next.right;
        }
        node.val = next.val;
        _deleteNode(p, next, true);
      } else {
        node.val = t.left.val;
        node.left = t.left.left;
      }
    } else {
      if (isLeft) {
        parent.left = null;
      } else {
        parent.right = null;
      }
    }
  }

  const head = new TreeNode(0, null, root);
  let parent = head,
    t = root,
    isLeft = false;
  while (t !== null) {
    if (key < t.val) {
      parent = t;
      t = t.left;
      isLeft = true;
    } else if (key > t.val) {
      parent = t;
      t = t.right;
      isLeft = false;
    } else {
      // match
      _deleteNode(parent, t, isLeft);
      break;
    }
  }
  return head.right;
};

export default function run(input) {
  return group(
    input.map(JSON.parse).map((v, i) => {
      if (i % 2 === 0) {
        return arrayToTree(v);
      }
      return Number(v);
    }),
    2
  )
    .map(([root, key]) => deleteNode(root, key))
    .map(treeToArray)
    .map(JSON.stringify);
}
