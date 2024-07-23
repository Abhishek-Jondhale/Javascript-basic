let arr1 = [2, 6, 4, 3, 1];
let arr2 = [34, 56, 67, 78];

let sortedArr1 = arr1.sort((a, b) => a - b);
let sortedArr2 = arr2.sort((a, b) => a - b);

let concatenatedArr = [...sortedArr1, ...sortedArr2];

let evenNumbers = [];
let oddNumbers = [];

for (let num of concatenatedArr) {
  if (num % 2 === 0) {
    evenNumbers.push(num);
  } else {
    oddNumbers.push(num);
  }
}

let [ ...remainingOddNumbers] = oddNumbers;

console.log('Sorted and concatenated array:', concatenatedArr);
console.log('Even numbers:', evenNumbers);
console.log('Remaining odd numbers:', remainingOddNumbers);
