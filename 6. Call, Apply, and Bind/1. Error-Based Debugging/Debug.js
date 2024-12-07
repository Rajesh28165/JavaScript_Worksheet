// Given Code:
// const obj = {
//     num: 42,
//     getNum() {
//         return this.num;
//     }
// };
// const detachedGetNum = obj.getNum;
// console.log(detachedGetNum()); // Bug: `this` is undefined


// Corrected Code:
const obj = {
    num: 42,
    getNum() {
        return this.num;
    }
};
const detachedGetNum = obj.getNum.bind(obj);
console.log(detachedGetNum());