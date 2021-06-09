import { group } from "../utils.js";

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const maxResult = function (nums, k) {
  const heap = [];
  /**
   * @param {number[]} a
   * @param {number[]} b
   */
  const comp = (a, b) => a[1] - b[1] || a[0] - b[0];
  // const comp = (a,b) => a - b;
  function heapify(pos) {
    let largest = pos;
    const left = 2 * pos + 1;
    const right = 2 * pos + 2;
    if (left < heap.length && comp(heap[left], heap[largest]) > 0) {
      largest = left;
    }
    if (right < heap.length && comp(heap[right], heap[largest]) > 0) {
      largest = right;
    }
    if (largest !== pos) {
      const t = heap[largest];
      heap[largest] = heap[pos];
      heap[pos] = t;
      heapify(largest);
      return true;
    }
    return false;
  }
  function push(value) {
    heap.push(value);
    let pos = heap.length - 1;
    while (pos > 0) {
      const parent = Math.floor((pos - 1) / 2);
      if (heapify(parent)) {
        pos = parent;
      } else {
        break;
      }
    }
  }
  function pop() {
    const ret = heap[0];
    heap[0] = heap.pop();
    heapify(0);
    return ret;
  }

  // push(1);
  // push(2)
  // push(3);
  // console.log(pop(), pop(), pop());
  // throw "done";

  const txStart = Date.now();
  let tick = 0;

  push([0, nums[0]]);
  for (let i = 1; i < nums.length; i++) {
    let count = 0;
    while (i - heap[0][0] > k) {
      pop();
      count++;
    }
    if (count > 0) {
      console.log("removed", count, "elements");
    }

    const sortStart = Date.now();
    push([i, heap[0][1] + nums[i]]);
    tick += Date.now() - sortStart;
  }
  console.log(Date.now() - txStart, tick);
  return heap[0][1];
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([nums, k]) => maxResult(nums, k))
    .map(String);
}
