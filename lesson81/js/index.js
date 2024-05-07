const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 44, 55, 66, 77, 88, 99, 100];

for (let i = 0; i < arrNum.length; i++) {
  const element = arrNum[i];
  if (!(element % 2)) console.log(element);
}

const colors = ["красный", "оранжевый", "желтый", "зеленый", "голубой", "синий", "фиолетовый"];
for (let i = colors.length - 1; i >= 0; i--) {
  const element = colors[i];
  console.log(element);
}
