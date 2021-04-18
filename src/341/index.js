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
  this.findNext = (stack = []) => {
    if (stack.length > 0) {
      stack[stack.length - 1]++;
    }
    (function search(candidates, offset = 0) {
      for (let i = stack[offset] || 0; i < candidates.length; i++) {
        stack[offset] = i;
        if (candidates[i].isInteger()) {
          return true;
        }
        if (search(candidates[i].getList(), offset + 1)) {
          return true;
        }
      }
      while (stack.length > offset) {
        stack.pop();
      }
      return false;
    })(nestedList);
    return stack;
  };
  this.stack = this.findNext();
};

/**
 * @this NestedIterator
 * @returns {boolean}
 */
NestedIterator.prototype.hasNext = function () {
  return this.stack.length > 0;
};

/**
 * @this NestedIterator
 * @returns {number}
 */
NestedIterator.prototype.next = function () {
  const stack = this.stack;
  if (stack.length === 0) {
    throw new Error("impossible");
  }

  let items = this.nestedList;
  for (let i = 0; i < stack.length - 1; i++) {
    items = items[stack[i]].getList();
  }
  const res = items[stack[stack.length - 1]];
  this.stack = this.findNext(stack);
  return res.getInteger();
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
