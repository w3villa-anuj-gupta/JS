// let outer = 5;
// try {
//   outer = expect + 1;   // y cannot be used (referenced)
// }
// catch(err) {
//   console.log(` ${err.name} : ${err.message}`);
// }





// Exercise 


// Wrap a JSOn.parse() call inside try and catch.  




// let text = '{"name":"John", "age":30, "city":"New York"}'

// try {
//     let result = JSON.parse(text)
//     console.log(result);
// }catch(err) {
//     console.log(` ${err.name} : ${err.message}`);
// }






// Create a function that throws an error if input is not a number.



function numberError (inputNumber) {
    if (!(typeof inputNumber === 'number')) {
        throw "Not a Number";
    } else {
        console.log("Number");
    }
}


//  Log an error message gracefully in a catch block.

try{
    numberError('12');
} catch(err) {
    console.log(err);
}

 