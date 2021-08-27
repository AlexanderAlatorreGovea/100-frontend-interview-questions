const arr = [1, 2, 3, 4, 5];

const add2 = (v) => v + 1;

const arr2 = arr.map(add2);


console.log(arr2);

const arr3 = arr.map(add3)

function add3(val) {
    return val + 1
}

console.log(arr3)