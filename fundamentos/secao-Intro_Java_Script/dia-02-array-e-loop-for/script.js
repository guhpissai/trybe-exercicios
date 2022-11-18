// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// for (let index = 1; index < numbers.length; index ++) {
//   for (secondIndex = 0; secondIndex < numbers.length; index ++) {
//     if (numbers[index] < numbers[secondIndex]){
//       let position = numbers[index]
//       numbers[index] = numbers[secondIndex];
//       numbers[secondIndex] = position;
//     }
//   }
// }

// console.log(numbers);

// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
// let newArray = []
// let result

// for (let index = 0; index < numbers.length; index += 1) {
//   result = numbers[index] * numbers[index];
//   newArray.push(result);
// }
// console.log(newArray);

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newArray = [];

for (let index = 0; index < numbers.length; index += 1) {
  if (index + 1 < numbers.length) {
    newArray.push(numbers[index] * numbers[index + 1]);
  } else {
    newArray.push(numbers[index] * 2);
  }
}

console.log(newArray);
