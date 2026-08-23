class Box<T> {
    private content: T;
  
    constructor(value: T) {
      this.content = value;
    }
  
    get(): T {
      return this.content;
    }
  
    set(value: T): void {
      this.content = value;
    }
  }
  const stringBox = new Box<string>("TypeScript Generic");
  const numberBox = new Box<number>(100);
  
  console.log(stringBox.get());
  console.log(numberBox.get());

  export {};