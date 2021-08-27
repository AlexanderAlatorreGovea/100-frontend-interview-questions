//Pass by Value Primitives
//even though we set one varialbe equal to the other one

//Pass by Reference 
//if we push a new value to the array
// this value would be added to the new value


//To lose the reference you need to use either 
//the spread operator or JSON.parse, JSON.stringify



let example1 = 1;
let example2 = example1;
example2++;


console.log(example1, ' - ', example2);

const example3 = {
  channel: 'YouTube'
};
const example4 = {
  ...example3
};

let example5 = JSON.parse(JSON.stringify(example3))
example5.x = 3

example4.name = 'Dylan Israel';
console.log(example3, ' - ', example4);
console.log(example5)