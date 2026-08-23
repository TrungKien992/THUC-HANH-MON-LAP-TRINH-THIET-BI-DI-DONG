abstract class Appliance {
    abstract turnOn(): void;
  }
  
  class Fan extends Appliance {
    turnOn(): void {
      console.log("Fan is spinning and creating breeze.");
    }
  }
  
  class AirConditioner extends Appliance {
    turnOn(): void {
      console.log("Air Conditioner is cooling the room to 24°C.");
    }
  }

  const devices: Appliance[] = [new Fan(), new AirConditioner()];
  devices.forEach(device => device.turnOn());

  export {};