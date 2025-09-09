// Creating an Array and Initializing with Values
let a = [1,2,3,4,5,"Val"];

console.log(`type of the array : ${typeof a}`)
console.log(a);

console.log("Push operation")
a.push(6)
console.log(a);

console.log("unshift operation")
a.unshift(0)
console.log(a);

console.log("Pop operation")
a.pop()
console.log(a);

console.log("shift operation")
a.shift()
console.log(a);

console.log("splice operation")
a.splice(1,2)
console.log(a);

let len = a.length;

console.log("Array Length: " + len);


// Iterating through forEach loop

// only values
a.forEach(function myfunc(val) {
    console.log(`Val : ${val}`);
});

// values and indexes
a.forEach(function myfunc(val,ind) {
    console.log(`Index ${ind} Value : ${val}`);
});




                 //  map method of the array 

// is used to create the new array by applying the function on every elemnt of the array 
console.log("Map");


// multily every elemnt of the array by 2 
let arr = [1,12,34,56,90]

let arr_by_2 = arr.map((val)=> val*2)
console.log(arr_by_2);



// Using map to transform elements
let arr1 = [2, 5, 6, 3, 8, 9];

let sq_arr = arr1.map( (val)=> val*val)

console.log(sq_arr)


// convert every element of the array to number
const arr2 = ['10', '20', '30'];
const num = arr2.map(s => parseInt(s));

console.log(num);





                    // filer method of the array 


                    // is used to filter out the element that apply the perticular function on every elemnt 
// that retirns the new array 
console.log("Filter")


//  filter out the positive values 

let arr3 = [112, 52, 0, -1, 944]


let filtered_pos = arr3.filter((val)=> val > 0 );
console.log(`Positive : ${filtered_pos}`);
console.log(typeof filtered_pos);



// to get the even numbers from the array  

function isEven(value) {
    return value % 2 == 0;
}

let filtered_even = [11, 98, 31, 23, 944].filter(isEven);
console.log(filtered_even);






                  // reduce method of the array 


// is used to give a single val by applying the function to each elemnt of the array 
console.log("Reduce");

const arr4 = [2, 4, 6, 8, 10, 5];

// Use reduce to calculate the sum
const sum = arr4.reduce((acc, x) => acc + x, 0);

console.log(sum);


// Use reduce to calculate the max element of the array 
const max = arr4.reduce((x,y)=> x>y?x:y);

console.log(max);