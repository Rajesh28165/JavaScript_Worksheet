function Person(name) {
    this.name = name;
    this.sayName = function() {
        console.log(`My name is ${this.name}`);
    };
}

const person = new Person("Rajesh");
person.sayName();