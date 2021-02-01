/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { group } from "../utils.js";
import { arrayToListNode } from "../23/index.js";

/**
 * @param head The linked list's head.
 Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
const Solution = function (head) {
  this.head = head;
  let t = head,
    count = 0;
  while (t !== null) {
    t = t.next;
    count++;
  }
  this.size = count;
  console.log(count);
  this.next = this.head;
};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  let ans = this.next.val;
  for (let i = 1; i < this.size; i++) {
    this.next = this.next.next;
    if (this.next == null) {
      this.next = this.head;
    }
    if (Math.floor(Math.random() * this.size) === 0) {
      ans = this.next.val;
    }
  }
  return ans;
};

/**
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(head)
 * var param_1 = obj.getRandom()
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj, values;
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "Solution":
            values = param[0];
            obj = new Solution(arrayToListNode(...param));
            break;
          case "getRandom":
            // noinspection JSUnusedAssignment
            ans.push(obj.getRandom());
            break;
        }
      }
      // this is not a fair and reliable verification
      // so please manually check the result to ensure the distribution
      const table = {};
      ans.forEach((v) => {
        table[v] = (table[v] || 0) + 1;
      });
      console.log(table);
      return ans.every((v) => values.includes(v));
    })
    .map(String);
}
