export {};

class Person {
    constructor(public name: string, public age: number) {}
    displayInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
  
  class Student extends Person {
    constructor(name: string, age: number, public grade: string) {
      super(name, age);
    }
  
    displayAllInfo(): void {
      console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
    }
  }
  
  const student1 = new Student("Tran Thi B", 19, "A+");
  student1.displayAllInfo();