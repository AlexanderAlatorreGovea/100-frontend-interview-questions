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
console.log(add1());
console.log(add1());
console.log(add1());
