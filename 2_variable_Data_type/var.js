var g_scope = "tokoyo"
console.log(g_scope)
let b_scope = "22"
console.log(b_scope);
const same = "not updated"
console.log(same);


// Primitive Datatype

let x = 10;
let y = 15;
let z = x + y;
console.log(typeof x)
console.log(z);


let bigNum = 123422222222222222222222222222222222222n
console.log(bigNum)
console.log(typeof bigNum);


let multi_line = `
    This is a
    multiline
    string`;
console.log(typeof multi_line);

console.log(multi_line);

let s = 'JavaScript';
let len = s.length;

console.log("String Length: " + len);

let s1 = 'JavaScript Tutorial';
let s2 = s1.substring(0, 10);

console.log(s2);

let uCase = s.toUpperCase();
let lCase = s.toLowerCase();

console.log(uCase);
console.log(lCase);

let bool = Boolean("Hello")
console.log(bool);
console.log(typeof bool);

console.log(Boolean(0));

console.log(Boolean({}));
console.log(Boolean([])); 
console.log(Boolean("Hi"));

let empty = null;
console.log(typeof empty);

console.log(empty)

let notAssigned;
console.log(notAssigned);
console.log(typeof notAssigned);


let symbol1 = Symbol("Geeks")
let symbol2 = Symbol("Geeks")
// Each time Symbol() method 
// is used to create new global
// Symbol
console.log(typeof symbol1);

console.log(symbol1 == symbol2);


// Non- primitive Datatype

// Object

let obj1 = {
    name: "komal",
    age: 23,
    salary : 23000.00
};
console.log(obj1);

console.log(obj1.name);
console.log(obj1['salary']);
console.log(typeof obj1.salary);
console.log(typeof obj1);
console.log("adderss" in obj1);


let obj = new Object();
obj.name= "Sourav",
obj.age= 23,
obj.job= "Developer"

console.log(obj);


//  Array 

let a = [];
console.log(a);
console.log(typeof a);

let a_new = new Array(10, 20, 30);

console.log(a_new);


// Function 

function sum(x, y) { 
    return x + y; 
}
console.log(sum(6, 9)); 

// Function Expression

const mul = function (x, y) {
    return x * y;
};
console.log(mul(4, 5));

// Arrow Function
const add = (a, b) => a + b;
console.log(add(5, 3));

// Callback Functions

function num(n, callback) {
    return callback(n);
}

const double = (n) => n * 2;

console.log(num(5, double));