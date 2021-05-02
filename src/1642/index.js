import { group } from "../utils.js";

/**
 * @param {number[]} heights
 * @param {number} bricks
 * @param {number} ladders
 * @return {number}
 */
const furthestBuilding = function (heights, bricks, ladders) {
  return 0;
};

export default function run(input) {
  return group(input.map(JSON.parse), 3)
    .map(([heights, bricks, ladders]) =>
      furthestBuilding(heights, bricks, ladders)
    )
    .map(String);
}
