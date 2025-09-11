//  slice and substring 

const swap = 'Hello World';
console.log(swap.substring(7, 2)); // Output: "llo W" (swaps 7 and 2)
console.log(swap.slice(7, 2));     // Output: "" (returns empty string)


const negArg = "Mozilla";
console.log(negArg.substring(-5, 2)); // Output: "Mo" (treats -5 as 0)
console.log(negArg.slice(-5, 2));     // Output: "" (starts 5 from end, ends at index 2)
console.log(negArg.slice(-5, -2));    // Output: "zil" (starts 5 from end, ends 2 from end)


//  toUpperCase() and toLowerCase()

let text = "Hello , World!";
let upperText = text.toUpperCase();
let lowerText = text.toLowerCase();
console.log(upperText);
console.log(lowerText);



//  replace()

let replaceText = text.replace("World","Anuj");
console.log(replaceText);


//  split()
let splitText = text.split(",");
console.log(typeof splitText);
console.log(splitText);


// Exercises



//  Extract a substring from a full name 
let fullName = "Anuj Gupta";
let nickName = fullName.slice(0,4)
console.log(nickName);
let sirName = fullName.substring(5)
console.log(sirName);



// Replace a word in a sentence and log the result

let sentence = "You are a good boy.";
let replace_word = sentence.replace("good","bad");
console.log(replace_word);


// Use template literals to construct a greeting message

let message = `Hi ${fullName} , Welcome to our Company.`
console.log(message);

