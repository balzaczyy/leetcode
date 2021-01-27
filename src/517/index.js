/**
 * @param {number[]} machines
 * @return {number}
 */
const findMinMoves = function (machines) {
  const sum = machines.reduce((acc, cur) => acc + cur);
  if (sum % machines.length !== 0) {
    return -1;
  }

  const avg = sum / machines.length;
  let s = 0,
    ans = 0;
  for (let i = 0; i < machines.length; i++) {
    s += machines[i] - avg;
    ans = Math.max(ans, Math.abs(s));
    if (machines[i] > avg) {
      ans = Math.max(ans, Math.abs(machines[i] - avg));
    }
  }
  return ans;
};

export default function run(input) {
  return input.map(JSON.parse).map(findMinMoves).map(String);
}
