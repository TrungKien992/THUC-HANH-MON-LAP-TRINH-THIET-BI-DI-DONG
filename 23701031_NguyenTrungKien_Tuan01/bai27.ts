class Person {
    constructor(public name: string, public age: number) {}
  }
  
  class Teacher extends Person {
    constructor(name: string, age: number, public subject: string) {
      super(name, age);
    }
  
    introduce(): void {
      console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I teach ${this.subject}.`);
    }
  }
  
  const teacher = new Teacher("Dr. Minh", 45, "Computer Science");
  teacher.introduce();

  export {};