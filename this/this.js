console.log(this);

const exampleObj = {
  first: "Dylan",
  last: "Israel",
  fullName() {
    return `${this.first} ${this.last}`;
  },
  newFullName: (exampleObj) => {
    return `${this.first} ${this.last}`;
  },
};
const key = Object.getOwnPropertyNames(exampleObj);


console.log(exampleObj.fullName());
console.log(exampleObj.newFullName());
x()
var p = 3;

function x() {
  function y() {
    console.log(p)
  }
  y()
}
