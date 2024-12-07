// Given Code:
// const nums = [10, 20, 30];
// const result = nums.map((n) => n / 0).filter((n) => n > 0); // Bug: Improper math operation
// console.log(result.reduce());

// Corrected Code:
const nums = [10, 20, 30];
const result = nums.map((n) => n / 0).filter((n) => n > 0);
console.log(result);

const sum = result.reduce((acc,n)=>acc+n,0);
console.log(sum);

