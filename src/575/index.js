/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
  return 0;
};

export default function run(input) {
  return input.map(JSON.parse).map(distributeCandies).map(String);
}
