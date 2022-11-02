const listNumber = [2, 3, -5, -2, 4];

const newArray = [];
for (let i = 0; i < listNumber.length - 1; i++) {
  let number = listNumber[i] * listNumber[i + 1];
  newArray.push(number);
  
}

let max = newArray[0];
for (let i = 0; i < newArray.length; i++) {
  if (newArray[i] > max) {
    max = newArray[i];
  }
}
console.log(max);