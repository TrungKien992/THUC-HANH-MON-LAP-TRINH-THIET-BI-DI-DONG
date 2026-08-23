export {};

class Book {
    constructor(
      public title: string,
      public author: string,
      public year: number
    ) {}
  }

  const book1 = new Book("Clean Architecture", "Robert C. Martin", 2017);
  console.log(book1);