/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isPossible = function (nums) {
  function next(offset) {
    const base = nums[offset];
    offset++;
    while (offset < nums.length && nums[offset] === base) {
      offset++;
    }
    return offset;
  }
  const counts = [0];
  for (let i = next(0); i < nums.length; i = next(i)) {
    const last = nums[counts[counts.length - 1]];
    const cur = nums[i];
    if (cur !== last + 1) {
      return false;
    }
    counts.push(i);
  }
  counts.push(nums.length);
  // console.log(counts);

  if (counts.length < 3) {
    return false;
  }

  let last = counts[1];
  const seqs = [[0, last]];
  for (let i = 2; i < counts.length; i++) {
    const n = counts[i] - counts[i - 1];
    if (n === last) {
      // do nothing
    } else if (n > last) {
      seqs.push([i, n - last]);
    } else {
      // n < last
      let count = last - n;
      while (count > 0 && seqs.length > 0) {
        if (i - seqs[0][0] < 3) {
          return false;
        }
        if (seqs[0][1] > count) {
          seqs[0][1] -= count;
          count = 0;
        } else {
          count -= seqs[0][1];
          seqs.shift();
        }
      }
      if (count > 0) {
        return false;
      }
    }
  }
  while (seqs.length > 0) {
    const t = seqs.shift();
    if (nums.length - t[0] < 3) {
      return false;
    }
  }
  return true;
};

export default function run(input) {
  return input.map(JSON.parse).map(isPossible).map(String);
}
