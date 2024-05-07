// const user = {
//   name: "konstantin",
//   age: 23,
//   driversLicense: true,
//   isAdmin: true,
//   sayHello(str) {
//     console.log(`Hello ${str}`);
//   },
// };

// user.sayHello("friend");

const people = [
  {
    nave: "vasya",
    age: 23,
    isAdmin: true,
  },
  {
    nave: "kostya",
    age: 23,
    isAdmin: true,
  },
  {
    nave: "masha",
    age: 23,
    isAdmin: false,
  },
  {
    nave: "lena",
    age: 43,
    isAdmin: false,
  },
  {
    nave: "dasha",
    age: 20,
    isAdmin: true,
  },
  {
    nave: "sasha",
    age: 16,
    isAdmin: false,
  },
  {
    nave: "anya",
    age: 40,
    isAdmin: true,
  },
  {
    nave: "serega",
    age: 35,
    isAdmin: true,
  },
];

function simpleUsers(usersArr) {
  let simpleUsers = 0;
  usersArr.forEach((user) => {
    if (!user.isAdmin) simpleUsers++;
  });
  return console.log(simpleUsers);
}
simpleUsers(people);
