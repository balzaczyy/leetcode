const pnum = Deno.env.get('PROBLEM');
const input = Deno.readTextFileSync(pnum + '/input.txt').trim().split('\n').map(v => v.trim());
const output = Deno.readTextFileSync(pnum + '/output.txt').trim().split('\n').map(v => v.trim());

type Main = (input: string[]) => string[];

import('./' + pnum + '/index.js').then(m => {
  const main: Main = m.default;
  const ans = main(input);
  let matched = ans.length === output.length;
  if (matched) {
    for (let i = 0; i < ans.length; i ++) {
      if (ans[i] !== output[i]) {
        matched = false;
        break;
      }
    }
  }
  if (matched) {
    console.log('Correct!');
  } else {
    console.log('Wrong answer!');
    console.log(output);
    console.log('---');
    console.log(ans);
  }
}, err => {
  console.error(err);
})
