const input = [1, 2, 3, 4, 5];

total = 0;
input.forEach((n)=> {
    total+=n;
});
console.log(total);

const res = input.reduce((acc,n)=>acc+n,0)
console.log(res);