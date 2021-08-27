//let can be reassigned

//const cannot be reassigned, it is a constant
//const arrays can be modified like we can add a 2 
//you can modified non primitive data tipes declared with const
console.log(x)
var x = 3;

function example () {
  if (true) {
    let ex = 5;
  }

  return ex;
}

// function example() {
// var ex;
//     if (false) {
//         ex = 5;
//     }

//     return ex;
// }

// console.log(example());
// const conEx = 5;
// conEx++;
const conEx2 = [];
conEx2.push(2);
console.log(conEx2);

const conEx3 = {};
conEx3.name = 'Dylan';
console.log(conEx3)
