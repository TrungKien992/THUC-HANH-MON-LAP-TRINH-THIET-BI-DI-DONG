class Animal {
    makeSound(): void {
      console.log("Some generic animal sound");
    }
  }
  
  class Dog extends Animal {
    override makeSound(): void {
      console.log("Woof! Woof!");
    }
  }
  
  class Cat extends Animal {
    override makeSound(): void {
      console.log("Meow! Meow!");
    }
  }

  const animals: Animal[] = [new Dog(), new Cat(), new Animal()];
  animals.forEach(animal => animal.makeSound());

  export {};