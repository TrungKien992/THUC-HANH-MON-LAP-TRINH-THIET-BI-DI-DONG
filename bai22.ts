class Stack<T> {
    private items: T[] = [];
    push(element: T): void {
      this.items.push(element);
    }

    pop(): T | undefined {
      return this.items.pop();
    }

    peek(): T | undefined {
      return this.items[this.items.length - 1];
    }

    isEmpty(): boolean {
      return this.items.length === 0;
    }
  }

  const numberStack = new Stack<number>();
  numberStack.push(10);
  numberStack.push(20);
  console.log("Peek:", numberStack.peek()); // 20
  console.log("Pop:", numberStack.pop());   // 20
  console.log("Is empty?", numberStack.isEmpty()); // false

  export {};