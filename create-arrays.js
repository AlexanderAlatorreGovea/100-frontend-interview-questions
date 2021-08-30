const example1 = [1];
const badExample = new Array(1,3,4);
const example2 = example1.map((val) => {
  return val + 1;
});

console.log(example1);
console.log(example2);

badExample.map(item => item[0] === 1)

console.log(badExample)