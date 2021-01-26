import { group } from "../utils.js";

/**
 * Initialize your data structure here.
 */
const MyLinkedList = function () {
  this.next = null;
  this.val = -1;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1.
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function (index) {
  let t = this.next;
  while (t != null && index > 0) {
    t = t.next;
    index--;
  }
  return t === null ? -1 : t.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function (val) {
  const node = new MyLinkedList();
  node.val = val;
  node.next = this.next;
  this.next = node;
};

/**
 * Append a node of value val to the last element of the linked list.
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function (val) {
  let t = this;
  while (t.next !== null) {
    t = t.next;
  }
  t.next = new MyLinkedList();
  t.next.val = val;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
 * @param {number} index
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function (index, val) {
  let t = this;
  while (t.next !== null && index > 0) {
    t = t.next;
    index--;
  }
  if (index === 0) {
    const node = new MyLinkedList();
    node.val = val;
    node.next = t.next;
    t.next = node;
  }
};

/**
 * Delete the index-th node in the linked list, if the index is valid.
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function (index) {
  let t = this;
  while (t.next !== null && index > 0) {
    t = t.next;
    index--;
  }
  if (index === 0 && t.next !== null) {
    t.next = t.next.next;
  }
};

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj;
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "MyLinkedList":
            obj = new MyLinkedList();
            ans.push(null);
            break;
          default:
            // noinspection JSUnusedAssignment
            ans.push(obj[commands[i]](...param));
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
