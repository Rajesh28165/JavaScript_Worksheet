function countOddEven(numbers) {
    return numbers.reduce((acc,num) => {
        if (num%2 === 0) {
            acc.even +=1;
        } else {
            acc.odd +=1
        }
        return acc;
    }, {odd:0, even:0});
}

const input = [1,2,3,4,5];
console.log(countOddEven(input));