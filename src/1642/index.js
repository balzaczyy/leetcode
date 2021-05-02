import { group } from "../utils.js";

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = function (heights, bricks, ladders) {
  let cuts = [],
    usedBricks = 0;
  let ups = 0;
  for (let i = 1; i < heights.length; i++) {
    const diff = heights[i] - heights[i - 1];
    if (diff > 0) {
      ups++;
      cuts.push(diff);
      if (usedBricks + diff <= bricks) {
        usedBricks += diff;
      } else {
        cuts.sort((a, b) => a - b);
        usedBricks += cuts[cuts.length - 1] - diff;
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
