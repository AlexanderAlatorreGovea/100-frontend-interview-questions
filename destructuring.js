const [month, day, year] = [10, 25, 1987];
console.log(`${month}/${day}/${year}`);

let { firstName: fn, nickName } = { 
  firstName: 'Dylan',
  middleName: 'Christopher',
  lastName: 'Israel',
  nickName: 'Coding God'
};

console.log(fn);
console.log(nickName);


const newObj = {
  name: 'Alex',
  lastName: 'Govea',
  description: {
    n: 'n',
    p: 'p'
  }
}

const { name, lastName, description: {
  n,
  p
} } = newObj;
console.log(n)
console.log(p)
console.log(`${name} ${lastName}`)
