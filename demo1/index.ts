let a = 90;
console.log(a);

let b:number=20;
console.log(b);

let c:string="hi";
console.log(c);

//array
let arr:string[] =["a","b","c"];
console.log(arr);

//tuple
let arr2: [number,number] = [2,2];
console.log(arr2);

//tuple
let data:[{name:string},{name:string},{name:string}]=[{name:"john"},{name:"jean"},{name:"jane"}]
console.log(data);


//enum : options

enum Role{
    SUPER_ADMIN,
    ADMIN,
    USER
}

let role:Role = Role.ADMIN;

//any:can contain any type of value

let v1:any = 10;
console.log(v1);
v1="hello";
console.log(v1);


//unknown : can contain any type of value but will generate problem if try to edit the value  
//have doubt in this topic

let v2:unknown = 20;
console.log(v2);
v2="hello";
console.log(v2);


//never: never allow anything to save just blank

let v3:never=10; // cannot assign any value 
console.log(v3);


//union type: when we want that a variable can contain more than 1 type not any

let d:number|string = "hello";
console.log(d);
d=10;
console.log(d);
d=true; //not allowed as it can only take either number or string as defined above
console.log(d);


//literals

type Status ="pending" | "success" | "error";

let status:Status = "success"; //allowed
console.log(status);
status = "pending";
console.log(status);
status="hi"; //not allowed
