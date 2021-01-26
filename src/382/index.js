/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
import { group } from "../utils.js";
import { arrayToListNode } from "../2021/Jan/24/index.js";

/**
 * @param head The linked list's head.
 Note that the head is guaranteed to be not null, so it contains at least one node.
 * @param {ListNode} head
 */
const Solution = function (head) {};

/**
 * Returns a random node's value.
 * @return {number}
 */
Solution.prototype.getRandom = function () {
  return Math.floor(Math.random() * 3 + 1);
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
      return ans.every((v) => values.includes(v));
    })
    .map(String);
}
