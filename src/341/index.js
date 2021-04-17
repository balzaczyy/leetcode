import { group } from "../utils.js";

/**
 * @param {Number|NestedInteger[]}value
 * @constructor
 */
function NestedInteger(value) {
  this.value = value;
  this.isInteger = () => typeof value === "number";
  /**
   * @returns {Number|null}
   */
  this.getInteger = () => (this.isInteger() ? value : null);
  /**
   * @returns {NestedInteger[]|null}
   */
  this.getList = () => (this.isInteger() ? null : value);
}

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
const NestedIterator = function (nestedList) {
  this.nestedList = nestedList;
  // find very first value
  const stack = [];
  let candidates = nestedList;
  do {
    stack.push(0);
    candidates = candidates[0].getList();
  } while (candidates && candidates.length > 0);
  this.stack = stack;
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.stack.length > 0 && this.stack[0] < this.nestedList.length;
};

/**
 * @this NestedIterator
 * @returns {number}
 */
NestedIterator.prototype.next = function () {
  const q = [[...this.nestedList]];
  /**
   * @type {NestedInteger}
   */
  let t;
  for (let i = 0; i < this.stack.length; i++) {
    t = q[q.length - 1][this.stack[i]];
    const next = t.getList();
    if (next) {
      q.push(next);
    }
  }
  // move cursor
  this.stack[this.stack.length - 1]++;
  while (
    this.stack.length > 0 &&
    this.stack[this.stack.length - 1] === q[this.stack.length - 1].length
  ) {
    this.stack.pop();
    q.pop();
    if (this.stack.length > 0) {
      this.stack[this.stack.length - 1]++;
    }
  }
  if (this.stack.length > 0) {
    let candidates = q[this.stack.length - 1][
      this.stack[this.stack.length - 1]
    ].getList();
    while (candidates && candidates.length > 0) {
      this.stack.push(0);
      candidates = candidates[0].getList();
    }
  }

  return t.getInteger();
};

/**
 * Your NestedIterator will be called like this:
 * var i = new NestedIterator(nestedList), a = [];
 * while (i.hasNext()) a.push(i.next());
 */

/**
 * @param {any[]} arr
 * @returns {NestedInteger[]}
 */
function arrayToNestedInteger(arr) {
  /**
   * @type {NestedInteger[]}
   */
  const q = [];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      q.push(new NestedInteger(arr[i]));
    } else if (Array.isArray(arr[i])) {
      q.push(new NestedInteger(arrayToNestedInteger(arr[i])));
    }
  }
  return q;
}

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(arrayToNestedInteger)
    .map((nestedList) => {
      const i = new NestedIterator(nestedList),
        a = [];
      while (i.hasNext()) {
        a.push(i.next());
      }
      return a;
    })
    .map((v) => JSON.stringify(v));
}
