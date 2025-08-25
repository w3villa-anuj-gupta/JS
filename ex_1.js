// console.log("$" +(1+2)); 
// console.log("\u00A9" );
// function item(arr) {
//     return `item(${arr.length}) :   ${arr}`;
// }
// console.log(item([1,2,3]));




// const a = "a";
// const b = "b";
// if (a < b) {
//   // true
//   console.log(`${a} is less than ${b}`);
// } else if (a > b) {
//   console.log(`${a} is greater than ${b}`);
// } else {
//   console.log(`${a} and ${b} are equal.`);
// }

// function foo() {
//   var x = 1;
//   function bar() {
//     var y = 2;
//     console.log(x); // 1 (function `bar` closes over `x`)
//     console.log(y); // 2 (`y` is in scope)
//   }
//   bar();
//   console.log(x); // 1 (`x` is in scope)
//   console.log(y); // ReferenceError, `y` is scoped to `bar`
// }

// foo();

// for (var a of [1, 2, 3]);
// console.log(a); // 3


// var bla;
// console.log(bla); // undefined
// bla = 2;

// console.log(3 > 5 -5); // 2

// console.log(Math.random()*3);



// function convertTemperature(value,unit) {
//     if (unit === "C") {
//         return value*9/5 + 32;
//     } else {
//         return value*5/9 - 32;
//   }
// }

// console.log(square(5)); // 25

// function square(n) {
//   return n * n;
// }

product = {
    name: "chair",
    price: 200,
    quantity: 5,
    totalValue: function() {
        return this.price * this.quantity;
    }
}
console.log(JSON.stringify(product));

const jsonString = JSON.stringify(product);
const parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); // "chair
console.log(product.totalValue()); // 1000