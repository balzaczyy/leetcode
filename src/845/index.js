/**
 * @param {number[]} arr
 * @return {number}
 */
const longestMountain = function (arr) {
  let start = 0,
    peak = 0,
    end = 0,
    max = 0;
  arr.push(Number.MAX_SAFE_INTEGER);
  for (let i = 1; i < arr.length; i++) {
    if (end <= peak) {
      // ascending
      if (arr[i] > arr[i - 1]) {
        peak = i;
      } else if (arr[i] === arr[i - 1]) {
        start = peak = end = i;
      } else {
        end = i;
      }
    } else {
      // descending
      if (arr[i] > arr[i - 1]) {
        max = Math.max(max, end - start + 1);
        start = end;
        peak = i;
      } else if (arr[i] === arr[i - 1]) {
        start = peak = end = i;
      } else {
        end = i;
      }
    }
  }
  return max < 3 ? 0 : max;
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(longestMountain)
    .map((v) => JSON.stringify(v));
}
