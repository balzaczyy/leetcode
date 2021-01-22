import { group } from "../utils.js";

/**
 * @param {number} x
 * @param {number} target
 * @return {number}
 */
const leastOpsExpressTarget = function (x, target) {
  const orders = [];
  if (target === 0) {
    // impossible
  } else if (target < x) {
    const n1 = 2 * (x - target); // x - x / x - x / x for (x-target) times
    const n2 = 2 * target - 1; // x / x + x / x + ... for (target) times
    const s = Math.min(n1, n2);
    orders.push(s);
  } else {
    let p = x;
    while (p * x <= target) {
      p *= x;
    }
    while (p > 1) {
      orders.push(Math.floor(target / p));
      target %= p;
      p /= x;
    }
    orders.push(target);
    orders.reverse();
  }
  console.log("before:", orders);

  const ratio = (i) => (i === 0 ? 2 : i);
  const numOrders = orders.length;
  for (let i = 0; i < numOrders; i++) {
    if (orders[i] * 2 <= x) {
      continue;
    }
    const d = orders[i] * 2 - x;
    const diff = d * ratio(i) - ratio(i + 1);
    if (diff > 0) {
      orders[i] = x - orders[i];
      orders[i + 1] = (orders[i + 1] || 0) + 1;
    }
  }
  console.log("after:", orders);

  return (
    orders.reduce((acc, cur, i) => {
      return acc + cur * ratio(i);
    }, 0) - 1
  );
};

export default function run(input) {
  return group(input.map(Number), 2)
    .map(([x, target]) => leastOpsExpressTarget(x, target))
    .map(String);
}
