interface Movable {
    move(): void;
  }
  
  class MoveCar implements Movable {
    move(): void {
      console.log("Car moves by rotating its 4 wheels.");
    }
  }
  
  class Robot implements Movable {
    move(): void {
      console.log("Robot walks forward using bipedal legs.");
    }
  }

  const moverList: Movable[] = [new MoveCar(), new Robot()];
  moverList.forEach(m => m.move());

  export {};