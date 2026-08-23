class AnimalBase {
    constructor(public name: string) {}
  }
  
  class Dog extends AnimalBase {
    bark(): void {
      console.log(`${this.name} barks: Woof Woof!`);
    }
  }
  
  class Cat extends AnimalBase {
    meow(): void {
      console.log(`${this.name} meows: Meow Meow!`);
    }
  }

  const dog = new Dog("Buddy");
  const cat = new Cat("Mimi");
  dog.bark();
  cat.meow();

  export {};