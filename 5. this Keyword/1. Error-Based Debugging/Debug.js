// Given Code:
// const obj = {
//     name: "Alice",
//     greet: () => {
//         console.log(`Hello, ${this.name}`); // Bug: Arrow function doesn't bind `this`
//     }
// };
// obj.greet();


// Corrected code:
const obj = {
    name: "Alice",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};
obj.greet();

