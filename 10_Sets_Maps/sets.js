// Create a Set
const letters = new Set(["a","b","c"]);

console.log(letters);
letters.add("d")
letters.add("e")
console.log(letters);
console.log(typeof letters);


let text = "";
for (let x of letters){
    text += x;
}
console.log(text);



// The number of elements are
console.log(letters.size);


// Does the Set contain "d"?
console.log(letters.has("d"));

// Get all Values
const myIterator = letters.values();
console.log(myIterator);

// Create an Iterator
const myIterator_keys = letters.keys();
console.log(myIterator_keys);

let inner_set = new WeakSet();
let my_obj = {fname: "Anuj",lname:"Gupta"}
inner_set.add(my_obj)
console.log(inner_set);
console.log(my_obj);
