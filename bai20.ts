interface Vehicle {
    speed: number;
    drive(): void;
  }
  
  class Car implements Vehicle {
    constructor(public speed: number) {}
    drive(): void {
      console.log(`Car is speeding at ${this.speed} km/h`);
    }
  }
  
  class Bike implements Vehicle {
    constructor(public speed: number) {}
    drive(): void {
      console.log(`Bike is pedaling at ${this.speed} km/h`);
    }
  }

  const car: Vehicle = new Car(100);
  const bike: Vehicle = new Bike(20);
  car.drive();
  bike.drive();

  export {};