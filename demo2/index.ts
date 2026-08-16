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

let e1:Emp = {
    name: "jean",
    age: 12,
    address: {
        street: "Malabar",
        city: "Mumbai",
        state: "MH",
    }
}

console.log(e1);


let sum = (a:number,b:number):number=>{
    return a+b;
}

console.log(sum(5,10));
