const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  vote_eligibility : function (){
    if (this.age > 18 ){
        return true
    } 
    else{
        return false
    }
  }
};

console.log(person.firstName + " is " + person.age + " years old.");
console.log(person.vote_eligibility());

console.log(Object.values(person));

//  adding the property
person.address = "Kanpur";

console.log(person);

// modifying the property

person.age = 25;

console.log(person);

// delete the property

delete person.eyeColor;

console.log(person);



// Exercise

//  Create a student object with name, age, and grade.

const student = {
  name : "Rahul",
  age : 12,
  grade : 'A1'
};

// add a new property isPassed and delete grade.

student.isPassed = true;

console.log(student);


delete person.grade;

console.log(student);


// Access property using both dot and bracket notation.

console.log(student.name);
console.log(student['age']);
console.log(student['isPassed']);




