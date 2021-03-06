function example (param1) {
  return param1 + 1;
}

console.log(example(1));

const example2 = (param1) => {
  return param1 + 1;
};

const example3 = param1 => param1 + 1;

console.log(example2(1));
console.log(example3(1));

const user = {
  firstName: 'Dylan',
  lastName: 'Israel',
  fullName: () => {
    return `${this.firstName} ${this.lastName}`;
  },
  pa: () => {
    const name = this.name

    return () => {
      return `${name} `;
    }
    n()
  }
};

console.log(user.fullName());
const newPa = user.pa();
console.log(newPa());

