/**
 * @param {number[]} arr
 * @return {number}
 */
const findLucky = function (arr) {
  arr.sort((a, b) => b - a);
  const start = arr.findIndex((v, i) => v <= arr.length - i);
  if (start < 0) {
    return -1;
  }
  let last = arr[start],
    count = 1;
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] === last) {
      count++;
    } else if (count === last) {
      break;
    } else {
      last = arr[i];
      count = 1;
    }
  }
  return last === count ? last : -1;
};

export default function run(input) {
  return input.map(JSON.parse).map(findLucky).map(String);
}
