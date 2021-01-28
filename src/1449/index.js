import { group } from "../utils.js";

/**
 * @param {number[]} cost
 * @param {number} target
 * @return {string}
 */
const largestNumber = function (cost, target) {
  const cost2 = (() => {
    const cd = cost.map((cost, i) => ({ cost, number: i + 1 }));
    cd.sort((a, b) => {
      if (a.cost === b.cost) {
        return b.number - a.number;
      }
      return a.cost - b.cost;
    });
    return cd.reduce((acc, cur) => {
      if (acc.length === 0 || acc[acc.length - 1].cost !== cur.cost) {
        acc.push(cur);
      }
      return acc;
    }, []);
  })();
  console.log(cost2);

  const combo = [];
  function search(pos = 0, total = target) {
    if (total === 0) {
      // console.log(combo);
      return true;
    } else if (pos === cost2.length) {
      return false;
    }

    const cur = cost2[pos];
    const limit = Math.floor(total / cur.cost);
    for (let i = limit; i > 0; i--) {
      combo.push({ number: cur.number, times: i });
      if (search(pos + 1, total - cur.cost * i)) {
        return true;
      }
      combo.pop();
    }
    return search(pos + 1, total);
  }

  const found = search();
  if (!found) {
    return "0";
  }

  combo.sort((a, b) => b.number - a.number);
  // console.log(combo);
  return combo
    .reduce((acc, cur) => {
      for (let i = 0; i < cur.times; i++) {
        acc.push(String(cur.number));
      }
      return acc;
    }, [])
    .join("");
};

export default function run(input) {
  return group(input.map(JSON.parse), 2).map(([cost, target]) =>
    largestNumber(cost, target)
  );
}
