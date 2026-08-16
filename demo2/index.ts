let user: {
    name: string,
    age: number,
    address: {
        street: string,
        city: string,
        state: string
    }
} = {
    name: "john",
    age: 10,
    address: {
        street: "Dharavi",
        city: "Mumbai",
        state: "MH",
    }
}

console.log(user);



type Emp = {
    name: string;
    age: number;
    address: {
        street: string,
        city: string,
        state: string
    };
}

let e1: Emp = {
    name: "jean",
    age: 12,
    address: {
        street: "Malabar",
        city: "Mumbai",
        state: "MH",
    }
}

console.log(e1);


let sum = (a: number, b: number): number => {
    return a + b;
}

console.log(sum(5, 10));

let avg = (a: number, b: number, c: number = 20): void => {
    console.log((a + b + c) / 3);
}

avg(5, 10, 15);
avg(5, 10);

let addition = (...arr: number[]): number => {
    console.log(arr);
    return arr.reduce((acc, value) => {
        return acc + value
    }, 0);
}

let add: number = addition(1, 2, 3, 4, 5);
console.log(add);

