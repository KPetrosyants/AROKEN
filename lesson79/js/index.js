// let age = prompt("Ваш возраст?");
// if (age < 18) {
//   alert("Вы не совершеннолетний");
// } else {
//   alert("Вы  совершеннолетний");
// }

// prompt("Ваш возраст?") < 18 ? alert("вы не совершеннолетний") : alert("вы  совершеннолетний");

let age = prompt("Ваш возраст?");

switch (true) {
  case age >= 18:
    alert("Вы  совершеннолетний");
    break;
  default:
    alert("Вы не совершеннолетний");
    break;
}
