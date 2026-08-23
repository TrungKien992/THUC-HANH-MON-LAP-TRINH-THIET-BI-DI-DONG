interface Flyable {
    fly(): void;
  }
  
  interface Swimmable {
    swim(): void;
  }

  class Bird implements Flyable {
    fly(): void {
      console.log("Bird is flying in the sky.");
    }
  }

  class Fish implements Swimmable {
    swim(): void {
      console.log("Fish is swimming underwater.");
    }
  }

  new Bird().fly();
  new Fish().swim();

  export {};