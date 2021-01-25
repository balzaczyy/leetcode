/**
 * @param {number[]} nums
 * @return {number[]}
 */
const smallerNumbersThanCurrent = function (nums) {
  const s = nums.slice();
  s.sort((a, b) => a - b);
  const table = Array(10);
  table[s[0]] = 0;
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (s[i] > s[i - 1]) {
      table[s[i]] = table[s[i - 1]] + count;
      count = 1;
    } else {
      table[s[i]] = table[s[i - 1]];
      count++;
    }
  }
  // console.log(table);
  return nums.map((v) => table[v]);
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(smallerNumbersThanCurrent)
    .map((v) => JSON.stringify(v));
}
