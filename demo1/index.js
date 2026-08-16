"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 90;
console.log(a);
let b = 20;
console.log(b);
let c = "hi";
console.log(c);
//array
let arr = ["a", "b", "c"];
console.log(arr);
//tuple
let arr2 = [2, 2];
console.log(arr2);
//tuple
let data = [{ name: "john" }, { name: "jean" }, { name: "jane" }];
console.log(data);
//enum : options
var Role;
(function (Role) {
    Role[Role["SUPER_ADMIN"] = 0] = "SUPER_ADMIN";
    Role[Role["ADMIN"] = 1] = "ADMIN";
    Role[Role["USER"] = 2] = "USER";
})(Role || (Role = {}));
let role = Role.ADMIN;
//any:can contain any type of value
let v1 = 10;
console.log(v1);
v1 = "hello";
console.log(v1);
//unknown : can contain any type of value but will generate problem if try to edit the value  
//have doubt in this topic
let v2 = 20;
console.log(v2);
v2 = "hello";
console.log(v2);
//never: never allow anything to save just blank
let v3 = 10;
console.log(v3);
//# sourceMappingURL=index.js.map