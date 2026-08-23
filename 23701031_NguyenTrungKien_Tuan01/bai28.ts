class Animal {
    protected makeSound(): string {
      return "Some generic sound";
    }
  }
  
  class Dog extends Animal {
    protected override makeSound(): string {
      return "Woof Woof";
    }
  
    public triggerSound(): void {
      console.log(`Dog says: ${this.makeSound()}`);
    }
  }
  
  class Cat extends Animal {
    protected override makeSound(): string {
      return "Meow Meow";
    }
  
    public triggerSound(): void {
      console.log(`Cat says: ${this.makeSound()}`);
    }
  }

  const dog = new Dog();
  const cat = new Cat();
  dog.triggerSound();
  cat.triggerSound();

  export {};