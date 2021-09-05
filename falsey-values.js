//All of the following are falsy values except for 1
//Falsey values are all of the following except for 1
//everything that is not one of the values below is a truthy value
const example1 = undefined;
const example2 = null;
const example3 = NaN;
const example4 = 0;
const example5 = '';
const example6 = false;
const example7 = -0;

console.log(!!example1);
console.log(!!example2);
console.log(!!example3);
console.log(!!example4);
console.log(!!example5);
console.log(!!example6);

console.log(!!example7);
