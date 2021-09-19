//this will not continually add
function add3() {
  let counter = 0;
  counter++;
  return counter;
}
console.log(add3());
console.log(add3());
console.log(add3());

//you can define counterFor Add globally but that means that
//they can be reinitialized
let counterForAdd = 0;
function add4() {
  counterForAdd++;
  return counterForAdd;
}
console.log(add4());
console.log(add4());
console.log(add4());

// let counter = 0;

// function add1 () {
//   counter++;

//   return counter;
// }
const add1 = (function () {
  let counter = 0;

  return function () {
    counter++;

    return counter;
  };
})();
//let counter = 0; does reinitialize the variable because of
//the closure
let counter = 0;
console.log(add1());
console.log(add1());
console.log(add1());

const x = function () {
  let xA = 0;

  return () => {
    return (xA = 3);
  };
};

const b = x();
console.log(b());

//const arr = [1, 3,3 ]
//arr.length = 0

let arr;
console.log(arr);
