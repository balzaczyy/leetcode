import { group } from "../utils.js";

/**
 * @param {Number|NestedInteger[]}value
 * @constructor
 */
function NestedInteger(value) {
  this.value = value;
  this.isInteger = () => value instanceof Number;
  this.getInteger = () => (value instanceof Number ? value : null);
  this.getList = () => (value instanceof Number ? null : value);
}

/**
 * @constructor
 * @param {NestedInteger[]} nestedList
 */
var NestedIterator = function (nestedList) {};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return false;
};

/**
 * @this NestedIterator
 * @returns {number}
 */
NestedIterator.prototype.next = function () {
  return 0;
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
    if (arr[i] instanceof Number) {
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
