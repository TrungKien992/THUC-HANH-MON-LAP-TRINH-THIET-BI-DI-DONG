export {};

class Product {
    constructor(public name: string, public price: number) {}
  }

  const products: Product[] = [
    new Product("Keyboard", 80),
    new Product("Laptop", 1200),
    new Product("Mouse", 25),
    new Product("Monitor", 300)
  ];

  const expensiveProducts = products.filter(product => product.price > 100);

  console.log("Expensive Products:", expensiveProducts);