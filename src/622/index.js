import { group } from "../utils.js";

/**
 * @param {number} k
 */
const MyCircularQueue = function (k) {
  this.queue = Array(k);
  this.head = this.tail = 0;
  this.size = 0;
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function (value) {
  if (this.size < this.queue.length) {
    this.queue[this.tail] = value;
    this.tail = (this.tail + 1) % this.queue.length;
    this.size++;
    return true;
  }
  return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function () {
  const hasValues = this.size > 0;
  if (hasValues) {
    this.head = (this.head + 1) % this.queue.length;
    this.size--;
  }
  return hasValues;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function () {
  if (this.size === 0) {
    return -1;
  }
  return this.queue[this.head];
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function () {
  if (this.size === 0) {
    return -1;
  }
  return this.queue[(this.tail + this.queue.length - 1) % this.queue.length];
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function () {
  return this.size === 0;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function () {
  return this.size === this.queue.length;
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "MyCircularQueue":
            obj = new MyCircularQueue(...param);
            ans.push(null);
            break;
          case "enQueue":
            ans.push(obj.enQueue(...param));
            break;
          case "deQueue":
            ans.push(obj.deQueue());
            break;
          case "Front":
            ans.push(obj.Front());
            break;
          case "Rear":
            ans.push(obj.Rear());
            break;
          case "isEmpty":
            ans.push(obj.isEmpty());
            break;
          case "isFull":
            ans.push(obj.isFull());
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
