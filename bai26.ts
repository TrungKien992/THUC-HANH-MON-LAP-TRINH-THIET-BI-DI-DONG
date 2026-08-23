class Product {
    constructor(public name: string, public price: number) {}
  }
  
  class Order {
    private products: Product[] = [];
  
    addProduct(product: Product): void {
      this.products.push(product);
    }

    calculateTotal(): number {
      return this.products.reduce((sum, item) => sum + item.price, 0);
    }
  }

  const order = new Order();
  order.addProduct(new Product("Shirt", 25));
  order.addProduct(new Product("Jean", 45));
  console.log("Total Order Price: $" + order.calculateTotal());

  export {};