/**
 * @param {number[]} machines
 * @return {number}
 */
const findMinMoves = function (machines) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(findMinMoves).map(String);
}
