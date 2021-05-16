import { group } from "../utils.js";

/**
 * @param {string} left
 * @param {string} right
 * @return {number}
 */
const superPalindromesInRange = function (left, right) {
  /**
   * @param {Number} x
   * @returns {boolean}
   */
  function isPalindromeNumber(x) {
    if (x < 0) {
      return false;
    }

    let d = 0;
    for (let i = x; i > 0; i = Math.floor(i / 10)) {
      d = d * 10 + (i % 10);
    }
    return d === x;
  }
  const toNum = (na) => Number(na.map(String).join(""));

  const low = Number(left);
  const high = Number(right);
  const a = Math.sqrt(low);
  const limit = Math.sqrt(high);
  let n;
  if (a === Math.floor(a)) {
    n = String(a).split("").map(Number);
  } else {
    n = String(Math.ceil(a)).split("").map(Number);
  }

  let ans = 0;
  do {
    const num = toNum(n);
    if (num > limit) {
      break;
    }
    const target = num * num;
    if (isPalindromeNumber(target)) {
      console.log(num, target);
      ans++;
    } else {
      let next = String(target).split("").map(Number);
      next = generateNextPalindrome(next, next.length);
      const d = toNum(next);
      if (d > high) {
        break;
      }
      const da = Math.sqrt(d);
      if (da === Math.floor(da)) {
        n = String(da).split("").map(Number);
        if (isPalindromeNumber(da)) {
          console.log(da, d);
          ans++;
        }
      } else {
        n = String(Math.ceil(da)).split("").map(Number);
        if (isPalindromeNumber(Math.ceil(da))) {
          continue;
        }
      }
    }
    n = generateNextPalindrome(n, n.length);
  } while (true);
  return ans;
};

export default function run(input) {
  return group(input.map(JSON.parse), 2)
    .map(([left, right]) => superPalindromesInRange(left, right))
    .map((v) => JSON.stringify(v));
}

// JavaScript program to find next smallest
// palindrome

/**
 * Returns the next palindrome of a given number. (T2/T3)
 * @param {number[]} num
 * @param {number} n
 */
function generateNextPalindromeUtil(num, n) {
  const mid = Math.floor(n / 2);

  // end of left side is always 'mid -1'
  let i = mid - 1;

  // Beginning of right side depends
  // if n is odd or even
  let j = n % 2 === 0 ? mid : mid + 1;

  // A bool variable to check if copy of left
  // side to right
  // is sufficient or not
  let leftsmaller = false;

  // Initially, ignore the middle same digits
  while (i >= 0 && num[i] === num[j]) {
    i--;
    j++;
  }

  // Find if the middle digit(s) need to
  // be incremented or not (or copying left
  // side is not sufficient)
  if (i < 0 || num[i] < num[j]) {
    leftsmaller = true;
  }

  // Copy the mirror of left to tight
  while (i >= 0) {
    num[j++] = num[i--];
  }

  // Handle the case where middle digit(s)
  // must be incremented. This part of code
  // is for CASE 1 and CASE 2.2
  if (leftsmaller) {
    var carry = 1;

    // If there are odd digits, then increment
    // the middle digit and store the carry
    if (n % 2 === 1) {
      num[mid] += 1;
      carry = Math.floor(num[mid] / 10);
      num[mid] %= 10;
    }
    i = mid - 1;
    j = n % 2 === 0 ? mid : mid + 1;

    // Add 1 to the rightmost digit of the left
    // side, propagate the carry towards MSB digit
    // and simultaneously copying mirror of the
    // left side to the right side.
    //when carry is zero no need to loop through till i>=0
    while (i >= 0 && carry > 0) {
      num[i] = num[i] + carry;
      carry = Math.floor(num[i] / 10);
      num[i] %= 10;
      num[j] = num[i]; // copy mirror to right
      i--;
      j++;
    }
  }
}

/**
 *  Returns the next palindrome of a given number. (T1/T2/T3)
 * @param {number[]} num
 * @param {number} n
 */
function generateNextPalindrome(num, n) {
  // Input type 1: All the digits are 9,
  // simply o/p 1 followed by n-1 0's
  // followed by 1.
  if (isAll9(num, n)) {
    const ans = [];
    ans.push(1);
    for (let i = 0; i < n - 1; i++) {
      ans.push(0);
    }
    ans.push(1);
    return ans;
  }

  // Input type 2 and 3
  generateNextPalindromeUtil(num, n);
  return num;
}

// A utility function to check if num has all 9s
function isAll9(num, n) {
  for (let i = 0; i < n; i++) if (num[i] !== 9) return false;
  return true;
}
