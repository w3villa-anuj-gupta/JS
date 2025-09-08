//  Implicitly conversion

let num = 10;
let str = "20";
let result1 = num + str; 
// result is "1020" (num is implicitly converted to "10")
console.log(result1);

let result2 = str + num
console.log(result2);

if ("hello") { // "hello" is implicitly converted to true
    console.log("This will run.");
}


// explicitly conversion

let first = "42"
console.log(typeof first);
first = Number(first)
console.log(typeof first);
let second = 8
console.log(first + second);


let str1 = "12"
let str2 = "12.7"
let num1 = 13
let num2 = 13.5
console.log(parseInt(str1) + num1);
console.log(parseFloat(str2) + num2);

