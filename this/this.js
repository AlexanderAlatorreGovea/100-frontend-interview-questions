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

console.log(exampleObj.fullName());
console.log(exampleObj.newFullName());
