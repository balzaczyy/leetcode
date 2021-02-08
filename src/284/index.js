import { group } from "../utils.js";

/**
 * // This is the Iterator's API interface.
 * // You should not implement it, or speculate about its implementation.
 * function Iterator() {
 *    @ return {number}
 *    this.next = function() { // return the next number of the iterator
 *       ...
 *    };
 *
 *    @return {boolean}
 *    this.hasNext = function() { // return true if it still has numbers
 *       ...
 *    };
 * };
 */

/**
 * @param {Iterator} iterator
 */
const PeekingIterator = function (iterator) {
  this.iter = iterator;
  this.head = null;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.peek = function () {
  if (!this.head) {
    if (this.iter.hasNext()) {
      this.head = this.iter.next();
    }
  }
  return this.head;
};

/**
 * @return {number}
 */
PeekingIterator.prototype.next = function () {
  let res;
  if (this.head) {
    res = this.head;
    this.head = null;
  } else {
    res = this.iter.next();
  }
  return res;
};

/**
 * @return {boolean}
 */
PeekingIterator.prototype.hasNext = function () {
  return this.head || this.iter.hasNext();
};

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(arr)
 * var param_1 = obj.peek()
 * var param_2 = obj.next()
 * var param_3 = obj.hasNext()
 */

export function Iterator(arr) {
  let pos = 0;
  //@ return {number}
  this.next = function () {
    // return the next number of the iterator
    let res = null;
    if (pos < arr.length) {
      res = arr[pos];
      pos++;
    }
    return res;
  };

  //@return {boolean}
  this.hasNext = function () {
    // return true if it still has numbers
    return pos < arr.length;
  };
}

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([commands, params]) => {
      const ans = [];
      let obj = {};
      for (let i = 0; i < commands.length; i++) {
        const param = params[i];
        switch (commands[i]) {
          case "PeekingIterator":
            param[0] = new Iterator(param[0]);
            obj = new PeekingIterator(...param);
            ans.push(null);
            break;
          case "next":
            ans.push(obj.next());
            break;
          case "peek":
            ans.push(obj.peek());
            break;
          case "hasNext":
            ans.push(obj.hasNext());
            break;
        }
      }
      return ans;
    })
    .map((v) => JSON.stringify(v));
}
