// function concatString(str) {
//   console.log(`Hello ${str}`);
// }
// let name = "Konstantin";
// concatString(name);

// const arrayNum = [];
// for (let i = 0; i < 20; i++) {
//   arrayNum[i] = i;
// }

// function sort(array) {
//   for (let i = 0; i < array.length; i++) {
//     const el = array[i];
//     if (el > 10) console.log(el);
//   }
// }
// sort(arrayNum);

function calc(num1, num2, action) {
  let result = 0;
  switch (action) {
    case "minus":
      result = num1 - num2;
      break;
    case "plus":
      result = num1 + num2;
      break;
    case "multi":
      result = num1 * num2;
      break;
    case "division":
      result = num1 / num2;
      break;
    default:
      alert("Не верный ввод");
  }
  return result;
}
console.log(calc(10, 5, "minus"));
