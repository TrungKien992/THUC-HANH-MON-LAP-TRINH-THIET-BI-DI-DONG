export {};

class Car {
    constructor(
      public brand: string,
      public model: string,
      public year: number
    ) {}
  
    showInfo(): void {
      console.log(`Car: ${this.brand} ${this.model} (${this.year})`);
    }
  }

  const car1 = new Car("Toyota", "Corolla", 2022);
  car1.showInfo();