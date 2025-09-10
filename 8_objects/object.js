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


function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}

const myFather = new Person("John", "Doe", 50, "blue");
console.log(myFather);
