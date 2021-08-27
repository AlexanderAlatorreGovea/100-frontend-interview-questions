console.log(typeof 37 === 'number');

console.log(typeof NaN === 'number');

console.log(typeof `template literal` === 'string');
console.log(typeof '1' === 'string');

console.log(typeof true === 'boolean');


console.log(typeof { a: 1 } === 'object');

console.log({} instanceof Object);

console.log(typeof function () {} === 'function');
console.log(typeof Math.sin === 'function');

/* GOTCHAS */
console.log(typeof undefined === 'undefined');

//The type of array is is an object 
console.log(typeof [1, 2, 4] === 'object');

//To circunvent
console.log(typeof Array.isArray([1, 2, 4]) === 'object');
console.log(Array.isArray([1, 2, 4]));
console.log(Array.isArray({}));

//Type of null returns an object
console.log(typeof null);
console.log(null instanceof Object);

//Date and regex returns an object
console.log(typeof new Date() === 'object');
console.log(typeof /regex/ === 'object');

//to circumvent null and you use instanceof
console.log(null instanceof Object);

