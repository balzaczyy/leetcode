/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function (path) {
  const typeSlash = 1,
    typeWord = 2,
    typeSingleDot = 3,
    typeDoubleDots = 4;

  function readSlash(pos) {
    pos++;
    while (pos < path.length && path[pos] === "/") {
      pos++;
    }
    return [pos, typeSlash];
  }

  function readWord(pos) {
    const start = pos;
    while (pos < path.length && path[pos].match(/[a-z_\\.]/i)) {
      pos++;
    }
    return [pos, typeWord, path.substring(start, pos)];
  }

  function readDot(pos) {
    const start = pos;
    pos++;
    while (pos < path.length && path[pos] === ".") {
      pos++;
    }
    if (pos - start === 1) {
      return [pos, typeSingleDot];
    } else if (pos - start === 2) {
      return [pos, typeDoubleDots];
    }
    const [posNext, , w] = readWord(pos);
    return [posNext, typeWord, path.substring(start, pos) + w];
  }

  function nextToken(pos) {
    switch (path[pos]) {
      case "/":
        return readSlash(pos);
      case ".":
        return readDot(pos);
      default:
        return readWord(pos);
    }
  }

  const ans = [];
  let i = 0;
  while (i < path.length) {
    const [next, t, s] = nextToken(i);
    switch (t) {
      case typeSlash:
      case typeSingleDot:
        // just skip
        break;
      case typeWord:
        ans.push(s);
        break;
      case typeDoubleDots:
        ans.pop();
        ans.pop();
        break;
      default:
        throw new Error("impossible");
    }
    i = next;
  }
  return "/" + ans.join("/");
};

export default function run(input) {
  return input
    .map(JSON.parse)
    .map(simplifyPath)
    .map((v) => JSON.stringify(v));
}
