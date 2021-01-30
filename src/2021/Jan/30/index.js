/**
 * @param {number[]} nums
 * @return {number}
 */
const minimumDeviation = function (nums) {
  const findMin = (v) => {
    while (v % 2 === 0) v /= 2;
    return v;
  };
  const findMax = (v) => (v % 2 === 0 ? v : v * 2);
  const state = nums.map((v) => ({
    value: findMin(v),
    max: findMax(v),
  }));
  let minDev = -1;
  while (true) {
    state.sort((a, b) => a.value - b.value);
    let maxDev = state[state.length - 1].value - state[0].value;
    if (minDev === -1 || maxDev < minDev) {
      minDev = maxDev;
    }
    if (state[0].value < state[0].max) {
      state[0].value *= 2;
    } else {
      break;
    }
  }
  return minDev;
};

export default function run(input) {
  return input.map(JSON.parse).map(minimumDeviation).map(String);
}
