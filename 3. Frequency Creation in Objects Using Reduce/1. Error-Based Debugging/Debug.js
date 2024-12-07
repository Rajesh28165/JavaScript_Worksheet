// Given Code:
// const chars = "aabbc";
// const freq = chars.split("").reduce((acc, char) => {
//     acc[char]++;
//     return acc; // Bug: Initial value missing
// }, {});
// console.log(freq);

// Corrected Code:
const chars = "aabbc";
const freq = chars.split("").reduce((acc, char) => {
    acc[char] = (acc[char] || 0)+1;
    return acc; // Bug: Initial value missing
}, {});
console.log(freq);

