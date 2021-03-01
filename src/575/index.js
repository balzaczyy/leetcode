/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
  const kinds = new Set();
  for (let i = 0; i < candyType.length; i++) {
    kinds.add(candyType[i]);
    if (kinds.size >= candyType.length / 2) {
      break;
    }
  }
  return kinds.size;
};

export default function run(input) {
  return input.map(JSON.parse).map(distributeCandies).map(String);
}
