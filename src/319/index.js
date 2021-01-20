let table = [0,1];
let primes;

/**
 * @param {number} n
 * @return {number}
 */
const bulbSwitch = function(n) {
  function destructure(n) {
    // n = 2^x * 3^y * ..., return [x,y,...]
    if (!primes) {
      // prepare primes using sift
      const sift = Array(100).fill(true);
      sift[0] = sift[1] = false;
      for (let i = 2; i < sift.length; i ++) {
        for (let j = i+i; j < sift.length; j += i) {
          sift[j] = false;
        }
      }
      primes = [];
      sift.forEach((isPrime, i) => {
        if (isPrime) {
          primes.push(i);
        }
      })
      console.log(primes);
    }

    // calculate the remaining primes
    const limit = Math.floor(Math.sqrt(n));
    for (let i = primes[primes.length - 1] + 1; i <= limit; i ++) {
      const till = Math.floor(Math.sqrt(i));
      let found = true;
      for (let j = 0; primes[j] <= till; j ++) {
        if (i % primes[j] === 0) {
          found = false;
          break;
        }
      }
      if (found) {
        primes.push(i);
      }
    }

    const factors = [], orders = [];
    for (let i = 0; primes[i] <= limit; i ++) {
      if (n % primes[i] === 0) {
        let order = 0;
        while (n > 1 && n % primes[i] === 0) {
          n /= primes[i];
          order++;
        }
        factors.push(primes[i]);
        orders.push(order);
      }
    }
    if (factors.length === 0) {
      // is prime itself
      factors.push(n);
      orders.push(1);
    }
    return {
      factors,
      orders,
    }
  }

  for (let i = table.length; i <= n; i ++) {
    const {orders} = destructure(i);
    const numFactors = orders.reduce((cur, acc) => cur * (acc + 1), 1);
    if ((numFactors & 1) === 1) {
      table[i] = table[i-1] + 1;
    } else {
      table[i] = table[i-1];
    }
  }
  return table[n];
};

export default function run(input) {
  return input.map(v => Number(v)).map(bulbSwitch).map(v => String(v));
}
