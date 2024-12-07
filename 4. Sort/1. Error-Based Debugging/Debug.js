// Given Code:
// const nums = [1, 10, 2];
// nums.sort(); // Bug: Incorrect numeric sorting
// console.log(nums);

// Corrected Code:

// 1) Ascending Order:
const num1 = [1, 10, 2];
num1.sort((a,b)=>a-b);
console.log(num1);

// 2) Descending Order:
const num2 = [1, 10, 2];
num2.sort((a,b)=>b-a);
console.log(num2);


