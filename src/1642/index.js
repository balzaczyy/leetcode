import { group } from "../utils.js";

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = function (heights, bricks, ladders) {
  function bicert(arr, value, start = 0, end = arr.length) {
    while (start < end) {
      if (value < arr[start]) {
        arr.splice(start, 0, value);
        return;
      } else if (value > arr[end - 1]) {
        arr.splice(end, 0, value);
        return;
      } else {
        const mid = Math.floor((start + end) / 2);
        if (arr[mid] === value) {
          arr.splice(mid, 0, value);
          return;
        } else if (arr[mid] < value) {
          start = mid + 1;
        } else {
          end = mid - 1;
        }
      }
    }
  }
  let cuts = [],
    usedBricks = 0;
  let ups = 0;
  for (let i = 1; i < heights.length; i++) {
    const diff = heights[i] - heights[i - 1];
    if (diff > 0) {
      ups++;
      if (cuts.length === 0 || diff > cuts[cuts.length - 1]) {
        cuts.push(diff);
      } else if (diff < cuts[0]) {
        cuts.unshift(diff);
      } else {
        bicert(cuts, diff);
        // const pos = cuts.findIndex(v => v >= diff);
        // if (pos < 0) {
        //   cuts.push(diff);
        // } else {
        //   cuts.splice(pos, 0, diff);
        // }
      }
      if (usedBricks + diff <= bricks) {
        usedBricks += diff;
      } else {
        // cuts.sort((a, b) => a - b);
        usedBricks += diff - cuts[cuts.length - 1];
        cuts.pop();
      }
      if (ups - cuts.length > ladders) {
        return i - 1;
      }
    }
  }
  return heights.length - 1;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([heights, bricks, ladders]) =>
      furthestBuilding(heights, bricks, ladders)
    )
    .map(String);
}
