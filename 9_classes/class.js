class Car1 {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
  age() {
    const date = new Date();
    return date.getFullYear() - this.year;
  }
}

const myCar = new Car1("Ford", 2014);
console.log(myCar);
console.log(myCar.age());



class Car {
  constructor(brand) {
    this.carname = brand;
  }
  present() {
    return 'I have a ' + this.carname;
  }
  static hello(){
    return "Hello";
  }
}

class Model extends Car {
  constructor(brand, mod) {
    super(brand);
    this.model = mod;
  }
  show() {
    return this.present() + ', it is a ' + this.model;
  }
}

let myCar1 = new Model("Ford", "Mustang");
console.log(myCar1.show());
console.log(Car.hello());

