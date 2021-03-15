let store = new Map();

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
const encode = function (longUrl) {
  let id = store.size + 1;
  let key = [];
  while (id > 0) {
    const n = id % 62;
    id = Math.floor(id / 62);
    if (n < 26) {
      key.push(String.fromCharCode(65 + n));
    } else if (n < 52) {
      key.push(String.fromCharCode(97 + n - 26));
    } else {
      key.push(String(n - 52));
    }
  }
  const k = key.join("");
  store.set(k, longUrl);
  // console.log(k);
  return k;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
const decode = function (shortUrl) {
  return store.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

export default function run(input) {
  return input.map(JSON.parse).map((v) => decode(encode(v)));
}
