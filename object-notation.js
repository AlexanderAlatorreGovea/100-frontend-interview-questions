const user = {
  firstName: "Dylan",
  middleName: "Christopher",
  lastName: "Israel",
  nickName: "Coding God",
};

//dot notation person.firstName
console.log(user.firstName + " " + user.lastName);
console.log(user["firstName"]);

//Bracket notation
//we often only use it with a for loop when we don't know the
//property
user["firstName"];

for (let property in user) {
  console.log(property);
  console.log(user[property]);
}
