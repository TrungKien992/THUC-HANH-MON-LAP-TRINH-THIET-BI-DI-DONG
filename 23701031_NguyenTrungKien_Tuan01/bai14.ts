class Employee {
    constructor(public name: string, public salary: number) {}
  }
  
  class Manager extends Employee {
    conductMeeting(): void {
      console.log(`Manager ${this.name} is leading a sprint planning meeting.`);
    }
  }
  
  class Developer extends Employee {
    writeCode(): void {
      console.log(`Developer ${this.name} is writing TypeScript code.`);
    }
  }

  const mgr = new Manager("Alice", 2500);
  const dev = new Developer("Bob", 1800);
  mgr.conductMeeting();
  dev.writeCode();

  export {};