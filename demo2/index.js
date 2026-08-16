"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = {
    name: "john",
    age: 10,
    address: {
        street: "Dharavi",
        city: "Mumbai",
        state: "MH",
    }
};
console.log(user);
let e1 = {
    name: "jean",
    age: 12,
    address: {
        street: "Malabar",
        city: "Mumbai",
        state: "MH",
    }
};
console.log(e1);
let sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 10));
let avg = (a, b, c = 20) => {
    console.log((a + b + c) / 3);
};
avg(5, 10, 15);
avg(5, 10);
let addition = (...arr) => {
    console.log(arr);
    return arr.reduce((acc, value) => {
        return acc + value;
    }, 0);
};
let add = addition(1, 2, 3, 4, 5);
console.log(add);
//# sourceMappingURL=index.js.map