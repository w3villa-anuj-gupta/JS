// Create a Map
const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);

fruits.set("mango",400)
console.log(fruits);

// get the value from the set 
console.log(fruits.get("apples"));

//  size of the set
console.log(fruits.size);

// delete the element of the map 
fruits.delete("apples");
console.log(fruits);

// check perticular key exists or not 
console.log(fruits.has("apples"));

// List all the Entries
fruits.forEach((val,key)=> console.log(`${key} : ${val}`))

// List all entries
for (const x of fruits.entries()) {
  console.log(x)
}

// Callback function to Group Elements
function myCall({quantity}){
    return quantity > 200 ? "ok" : "low"
}

// Group by Quantity
const result = Map.groupBy(fruits, myCall);

console.log(result);


// clear method is used to clear all the values 
fruits.clear()
console.log(fruits);
